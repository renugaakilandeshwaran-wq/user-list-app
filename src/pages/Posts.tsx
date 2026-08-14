import { useEffect, useState } from "react"
import type { Post } from "../types/type.ts";
import axios from "axios";


export default function Posts() {


    const [post, setPost] = useState<Post[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchPost()
    }, []);

    const fetchPost = async () => {
        try {
            setLoading(true);
            const response = await axios.get
                ("https://user-list-app-1.onrender.com/posts");
            setPost(response.data);

        } catch (error) {
            setError("Failed to fetch posts")
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <h1>Loading...</h1>;
    } if (error) {
        return <h1>{error}</h1>;
    }

    const filteredPosts = post.filter((posts) =>
        posts.title.toLowerCase().includes(search.toLowerCase()) ||
        posts.body.toLowerCase().includes(search.toLowerCase())

    );
    return (


        <>
            <div className="mt-20 lg:mb-100 max-w-7xl mx-auto">
                <h1 className="text-3xl text-center font-bold mt-4">Post List</h1>

                <div className="mx-auto text-center mt-4">
                    <input type="text "
                        value={search}
                        placeholder="Search here"
                        className="border  border-gray-400  mx-auto shadow-lg mt-2 px-10 py-2 rounded-lg "
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="grid gap-5 mt-10 px-4">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="shadow-lg px-4  bg-gray-200 py-4 rounded-lg w-150 mx-auto text-center border-gray-500">
                            <p className=" text-green-500 text-3xl font-bold uppercase">{post.title}</p>
                            <p className=" text-xl font-bold mt-4">{post.body}</p>
                            <p className=" text-xl font-bold text-yellow-500 mt-4">{post.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
