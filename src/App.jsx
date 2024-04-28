import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <ul className="nav justify-content-center  ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                List User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/create">
                Create User
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
