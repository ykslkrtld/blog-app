import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import MyNavbar from "../components/MyNavbar"
import axios from "axios"

const Main = () => {

    const [blogCards, setBlogCards] = useState([])

    const getBlogCard = async () => {
        try {
            const res = await axios("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data)
            setBlogCards(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBlogCard()
    }, [])
    

  return (
    <div>
        <MyNavbar/>
        <BlogCard blogCards={blogCards} setBlogCards={setBlogCards} />
        
    </div>
  )
}

export default Main