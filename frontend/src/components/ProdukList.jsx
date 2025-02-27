import { useState, useEffect } from "react";
import axios from 'axios';

function ProdukList({onEdit}) {
    const [produk, setProduk] = useState([]);

    const fetchProduk = () => {
        axios.get('http://localhost:3001/produk')
            .then((response) => {
                setProduk(response.data);
            })
            .catch((error) => {
                console.log('Terjadi error : ', error);
            });
    };

    useEffect(() => {
        fetchProduk();
    }, []);

    const handleEdit = (id) => {
        onEdit(id); // Just pass the ID to parent component
    };

    const handleDelete = (id) => {
        if (window.confirm('Apakah anda yakin ingin menghapus produk ini?')) {
            axios.delete(`http://localhost:3001/produk/${id}`)
                .then(() => {
                    setProduk(produk.filter((p) => p.id !== id));
                })
                .catch(err => {
                    console.error('Error deleting product:', err);
                    alert('Gagal menghapus produk');
                });
        }
    };

    return (
        <div>
            <h2>Daftar Produk</h2>
            <div>
                <ul>
                    {produk.map((item) => (
                        <li key={item.id}>
                        {item.nama} - Rp{item.harga}
                            <button onClick={() => handleEdit(item.id)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
    );
}

export default ProdukList;