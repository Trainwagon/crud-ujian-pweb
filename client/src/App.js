import { BrowserRouter, Routes, Route } from "react-router";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import { Link } from "react-router";
function App() {
  return (
    <div className="App bg-gray-200 min-h-screen flex flex-col">
      <BrowserRouter>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-left text-2xl font-bold">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </h1>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© 2025 My Library App</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
