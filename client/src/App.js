import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book, PlusCircle, Home } from "lucide-react";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <BrowserRouter>
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold flex items-center">
              <Link
                to="/"
                className="hover:text-blue-200 transition duration-300 flex items-center"
              >
                <Book className="mr-2" />
                My Library
              </Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-200 transition duration-300 flex items-center"
                  >
                    <Home className="mr-1" size={18} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add"
                    className="hover:text-blue-200 transition duration-300 flex items-center"
                  >
                    <PlusCircle className="mr-1" size={18} />
                    Add Book
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Book Catalog</p>
            <p className="mt-2 text-sm text-gray-400">
              Empowering readers, one book at a time.
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
