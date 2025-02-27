// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import ProdukList from './components/ProdukList'
import TambahProduk from './components/TambahProduk'
import EditProduk from './components/EditProduk'
// import './App.css'

function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div>
      <h1>Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk/>
      <ProdukList onEdit={setEditingProduct} />
      {editingProduct && <EditProduk productId={editingProduct} />}
    </div>
  )
}

export default App
