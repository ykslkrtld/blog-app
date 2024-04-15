import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import MyNavbar from "../components/MyNavbar";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";

const Main = () => {
  const [blogCards, setBlogCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, ] = useState(10);

  const lastPageIndex = currentPage * cardsPerPage;
  const firstPageIndex = lastPageIndex - cardsPerPage;
  const currentCards = blogCards.slice(firstPageIndex, lastPageIndex);

  const getBlogCard = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setBlogCards(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogCard();
  }, []);


  const handleDelete = (id) => {
    const newCards = blogCards.filter(card => card.id !== id);
    setBlogCards(newCards);
    if (newCards.length % cardsPerPage === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  let items = [];
  for (let number = 1; number <= Math.ceil(blogCards.length / cardsPerPage); number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <MyNavbar />
      <BlogCard blogCards={currentCards} setBlogCards={handleDelete} />
      <div className="d-flex justify-content-center">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};

export default Main;

