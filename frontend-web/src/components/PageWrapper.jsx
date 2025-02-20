import Navbar from './Navbar';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PageWrapper;