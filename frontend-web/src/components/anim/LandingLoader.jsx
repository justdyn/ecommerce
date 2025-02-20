import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LandingLoader = ({ onLoadingComplete }) => {
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const progressBarRef = useRef(null);
  const preLoaderRef = useRef(null);
  const heroImgsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set("nav", { y: -150 });

    const animate = (digit, duration, delay = 1) => {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;
      
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    animate(digit3Ref.current, 5);
    animate(digit2Ref.current, 6);
    animate(digit1Ref.current, 2, 5);

    const tl = gsap.timeline({
      onComplete: () => onLoadingComplete?.()
    });

    tl.to(progressBarRef.current, {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7,
    })
    .to(progressBarRef.current, {
      width: "100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(preLoaderRef.current, {
          display: "none",
        });
      }
    })
    .to(heroImgsRef.current.querySelectorAll("img"), {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
    })
    .to(heroRef.current, {
      scale: 1.25,
      duration: 3,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="pre-loader" ref={preLoaderRef}>
        <p>Loading</p>
        <div className="counter">
          <div className="digit-1" ref={digit1Ref}>
            <div className="num">0</div>
            <div className="num offset">1</div>
          </div>
          <div className="digit-2" ref={digit2Ref}>
            {[...Array(11)].map((_, i) => (
              <div key={i} className={`num ${i === 1 ? 'offset' : ''}`}>
                {i === 10 ? 0 : i}
              </div>
            ))}
          </div>
          <div className="digit-3" ref={digit3Ref}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="num">{i}</div>
            ))}
          </div>
          <div className="digit-4">%</div>
        </div>
        <div className="progress-bar" ref={progressBarRef}></div>
      </div>

      <div className="hero-imgs" ref={heroImgsRef}>
        {[
          'horde1.jpg',
          'horde2.jpg',
          'karyoku.jpg',
          'feed12.jpg',
          'feed11.jpg'
        ].map((img, i) => (
          <img key={i} src={`/public/images/feed/${img}`} alt="" />
        ))}
      </div>
    </section>
  );
};

export default LandingLoader;