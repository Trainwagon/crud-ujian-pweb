import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book, ArrowLeft } from "lucide-react";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books/${bookId}`);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-yellow-500 p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Book className="mr-2" /> Update Book
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-yellow-200 transition duration-300"
          >
            <ArrowLeft />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={book.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cover"
              className="block text-gray-700 font-semibold mb-2"
            >
              Cover URL
            </label>
            <input
              type="text"
              id="cover"
              name="cover"
              value={book.cover}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
