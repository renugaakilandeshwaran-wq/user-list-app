import { useEffect, useState } from "react"
import type { Product } from "../types/type.ts"
import axios from "axios";

export default function Product() {
    const [products, setProducts] = useState<Product[]>([]);
    const [editId, setEditId] = useState<number | null>(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        fetchProducts()

    }, []);

    const fetchProducts = async () => {
        const response = await axios.get("https://user-list-app-1.onrender.com/products");
        setProducts(response.data);
    };

    const handleSubmit = async () => {
        const newProduct = {
            name,
            price: Number(price),
            category,
            image,
        };

        await axios.post(
            "https://user-list-app-1.onrender.com/products",
            newProduct
        );

        fetchProducts();
    };
    const handleDelete = async (id: number) => {
        await axios.delete(
            `https://user-list-app-1.onrender.com/products/${id}`
        );

        fetchProducts();
    };
    const handleUpdate = async () => {
        await axios.put(
            `https://user-list-app-1.onrender.com/products/${editId}`,
            {
                id: editId,
                name,
                price: Number(price),
                category,
                image,
            }
        );

        fetchProducts();

        setEditId(null);
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
    };
    return (
        <>
            <div className="mt-25 lg:mb-25   max-w-7xl mx-auto">
                <h1 className="text-20xl text-center  font-bold">CRUD Operations </h1>
                <div className="mt-4 ">
                    <div className="mx-auto text-center">
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setEditId(null);

                                setName("");
                                setPrice("");
                                setCategory("");
                                setImage("");
                            }}
                            className="bg-green-500 w-52 h-10 text-white px-4 py-2 rounded-lg"
                        >
                            +Add Product
                        </button>
                    </div>

                    <div className="flex gap-4 mb-6 items-center justify-center mt-5">



                        {showForm && (
                            <div className="border  border-gray-300 px-4 py-4 rounded-lg mb-5">

                                <div className="grid w-full  gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border px-2 py-2 rounded-lg"
                                    />

                                    <input
                                        type="number"
                                        placeholder="Price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="border px-2 py-2 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="border px-2 py-2 rounded-lg"
                                    />

                                    <button
                                        className={`px-4 py-2 rounded-lg text-white ${editId ? "bg-blue -500" : "bg-blue-500"
                                            }`}

                                        onClick={editId ? handleUpdate : handleSubmit}
                                    >
                                        {editId ? "Update Product" : "Save Product"}
                                    </button>
                                    <button
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 gap-5 mt-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border border-gray-200 bg-blue-100 shadlow-lg p-8 rounded-lg mb-4 "
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                width={100}
                                className="mx-auto mt-4 rounded-lg"
                            />

                            <h2 className="text-center uppercase mt-4 text-xl  font-bold">{product.name}</h2>

                            <p className="text-center font-bold text-blue-500">₹{product.price}</p>

                            <p className="text-center font-bold text--500">{product.category}</p>

                            <div className="flex justify-between">
                                <button
                                    className="bg-green-500 px-2 py-1 rounded-lg text-white"

                                    onClick={() => {
                                        setShowForm(true);

                                        setEditId(product.id);
                                        setName(product.name);
                                        setPrice(product.price.toString());
                                        setCategory(product.category);
                                        setImage(product.image);
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    className="bg-red-500  text-white px-2 py-1 rounded-lg"

                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
