import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Book, PlusCircle, Edit, Trash2 } from "lucide-react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center">
            <Book className="mr-2" /> Books Shop
          </h1>
          <Link
            to="/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300"
          >
            <PlusCircle className="mr-2" /> Add New Book
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src="./coverBook.jpg"
                alt={book.title}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ${book.price}
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      to={`/update/${book.id}`}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <Edit />
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
