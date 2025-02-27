import axios from "axios";
import { useState, useEffect } from "react";

function EditProduk({ productId, onCancel }) {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (productId) {
            // Fetch single product data
            axios.get(`http://localhost:3001/produk/${productId}`)
                .then((res) => {
                    if (res.data) {
                        setNama(res.data.nama);
                        setHarga(res.data.harga);
                    }
                })
                .catch((err) => {
                    console.log('Error fetching product:', err);
                    setError('Gagal memuat data produk');
                });
        }
    }, [productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!nama || !harga) {
            setError('Nama dan Harga wajib diisi');
            return;
        }
        
        try {
            // Use PATCH instead of PUT if your backend expects PATCH
            const response = await axios.patch(`http://localhost:3001/produk/${productId}`, {
                nama: nama,
                harga: parseInt(harga)
            });

            if (response.data) {
                console.log('Produk berhasil diupdate:', response.data);
                // Refresh the page or call a callback to update the list
                window.location.reload();
            }
        } catch (err) {
            console.error('Error updating product:', err);
            setError('Gagal mengupdate produk');
        }
    };

    return (
        <div>
            <h2>Edit Produk</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Nama Produk</label>
                    <input 
                        type="text" 
                        value={nama} 
                        onChange={(e) => setNama(e.target.value)} 
                    />
                </div>
                <div>
                    <label >Harga:</label>
                    <input 
                        type="number" 
                        value={harga} 
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </div>
                <div >
                    <button 
                        type="submit">
                        Simpan
                    </button>
                    <button 
                        type="button"
                        onClick={onCancel}>
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduk;