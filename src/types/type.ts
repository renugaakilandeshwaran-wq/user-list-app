export interface user {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    image: string

}
export interface Todo {
    id: number;
    title: string;
    completed: boolean
}
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}
export interface Post {
    id: number;
    title: string;
    body: string;
    description: string;
}