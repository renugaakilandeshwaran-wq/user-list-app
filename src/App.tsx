import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Users from './pages/Users'
import Todo from './pages/Todo'
import Contact from './pages/Contact'
import Posts from './pages/Posts'
import UserDetails from './pages/UserDetails'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/product' element={< Product />} />
        <Route path='/users' element={< Users />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/posts' element={<Posts />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route />
      </Routes>
      <Footer />
    </>
  )
}
