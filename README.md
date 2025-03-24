Cara install dependasi :

```
npm install
```

Cara menjalankan aplikasi backend :

```
node index.js
```

Cara menjalankan aplikasi frontend :

```
npm run dev
```

Berikut daftar endpoint API yang ada pada Base URL: http://localhost:3001, yaitu :

1. Get All Products
   - Method: GET
   - Endpoint: /produk
   - Response: Array of products
   - Used in: ProdukList.jsx

2. Get Single Product
   - Method: GET 
   - Endpoint: /produk/:id
   - Parameters: id (number)
   - Response: Single product object
   - Used in: EditProduk.jsx

3. Create Product
   - Method: POST
   - Endpoint: /produk
   - Body: { nama: string, harga: number }
   - Response: Created product object
   - Used in: TambahProduk.jsx

4. Update Product
   - Method: PATCH
   - Endpoint: /produk/:id
   - Parameters: id (number)
   - Body: { nama: string, harga: number }
   - Response: Updated product object
   - Used in: EditProduk.jsx

5. Delete Product
   - Method: DELETE
   - Endpoint: /produk/:id
   - Parameters: id (number)
   - Response: { message: 'Produk dihapus' }
   - Used in: ProdukList.jsx

Tetapi, juga terdapat beberapa endpoint API yang tidak digunakan dalam penggunaan aplikasi, seperti :
Additional Test Endpoints (Unused):
1. GET /
   - Returns: "Hello World from Express.js!"

2. POST /data
   - Body: { nama: string }
   - Returns: "Data diterima: {nama}"

3. DELETE /data/:id
   - Returns: "Data dengan id {id} telah dihapus"

4. PUT /data/:id
   - Body: { nama: string }
   - Returns: "Data dengan id {id} telah diubah menjadi {nama}"