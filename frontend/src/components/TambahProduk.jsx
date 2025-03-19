import { useState } from "react";
import axios from "axios";

function TambahProduk() {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showErrorAnimation, setShowErrorAnimation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Validasi submit
        if(!nama || !harga) {
            setError('Nama dan Harga wajib diisi');
            setShowErrorAnimation(true);
            // Reset animation after it plays
            setTimeout(() => setShowErrorAnimation(false), 820);
            return;
        }
        setError('');
        setLoading(true);

        try {
            await axios.post('http://localhost:3001/produk', { nama, harga });
            setSuccess(true);
            setNama('');
            setHarga('');
            setTimeout(() => {
                setSuccess(false);
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.log('Error menambah produk : ', err);
            setError('Gagal menambah produk. Silakan coba lagi.');
            setShowErrorAnimation(true);
            setTimeout(() => setShowErrorAnimation(false), 820);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Tambah Produk</h2>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            New
                        </span>
                    </div>
                    
                    {error && (
                        <div className={`mb-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm transform transition-all duration-300 ${showErrorAnimation ? 'animate-shake' : ''}`}>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">{error}</p>
                                    <p className="mt-1 text-xs text-red-600">Mohon periksa kembali form isian Anda</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-4 rounded-lg bg-green-50 text-green-700 text-sm animate-fade-in">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 animate-scale-check">
                                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            className="animate-draw-check" 
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium">Produk berhasil ditambahkan!</p>
                                    <p className="mt-1 text-xs text-green-600">Halaman akan diperbarui dalam beberapa detik...</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Produk
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <input 
                                    type="text" 
                                    className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Masukkan nama produk"
                                    value={nama} 
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Harga
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">Rp</span>
                                </div>
                                <input 
                                    type="number" 
                                    className="block w-full rounded-md border-0 py-3 pl-12 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="0"
                                    value={harga} 
                                    onChange={(e) => setHarga(e.target.value)}
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-400 text-gray-400">
                                        <span className="text-xs font-bold">Rp</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm ${
                                loading 
                                    ? 'bg-indigo-400 cursor-not-allowed' 
                                    : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Menyimpan...
                                </>
                            ) : (
                                <>
                                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Tambah Produk
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                    20%, 40%, 60%, 80% { transform: translateX(2px); }
                }
                .animate-shake {
                    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
                }

                @keyframes fadeIn {
                    from { 
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }

                @keyframes scaleCheck {
                    0% { 
                        transform: scale(0);
                        opacity: 0;
                    }
                    50% { 
                        transform: scale(1.2);
                    }
                    100% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-scale-check {
                    animation: scaleCheck 0.5s ease-out forwards;
                }

                @keyframes drawCheck {
                    from {
                        stroke-dashoffset: 100;
                    }
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                .animate-draw-check {
                    stroke-dasharray: 100;
                    animation: drawCheck 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default TambahProduk;