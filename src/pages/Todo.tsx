import axios from "axios";
import { useEffect, useState } from "react"
import type { Todo } from "../types/type.ts"

export default function Todo() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchTodos();
    }, []);
    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos"
            );
            setTodos(response.data);

        } catch (error) {
            setError("Failed to fetch todos");
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <h1>Loading...</h1>
    } if (error) {
        return <h1>{error}</h1>
    }
    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo
            )
        );
    };

    return (
        <>
            <div className="max-w-6xl mx-auto mt-20 px-4 bg-gray-100 w-full lg:mb-20">
                <h1 className="text-3xl font-bold mt-10 py-4 uppercase text-center ">
                    Todo List
                </h1>
                <div className="grid gap-5 px-4 py-8 ">
                    <h1 className="text-center text-2xl text-gray-500">Which languages do you know?

                    </h1>
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className=" shadow-lg p-4 mt-5 border border-gray-200 rounded-lg shadow flex items-center gap-3 mx-auto w-full lg:w-92 text-xl lg:text-2xl"
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggle(todo.id)}


                            />

                            <span>
                                {todo.title}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
