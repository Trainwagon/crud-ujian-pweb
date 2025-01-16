import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const FetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    FetchAllBooks();
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
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Books Shop
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
            key={book.id}
          >
            {/* {book.cover && ( */}
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src="./coverBook.jpg"
              alt={book.title}
            />
            {/* )} */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-gray-600 mt-2">{book.description}</p>
              <span className="block text-lg font-bold text-green-600 mt-4">
                ${book.price}
              </span>
              <div className="flex space-x-4 mt-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
                <button>
                  <Link
                    to={`/update/${book.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Update
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/add"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Add New Book
        </Link>
      </div>
    </div>
  );
};

export default Books;
