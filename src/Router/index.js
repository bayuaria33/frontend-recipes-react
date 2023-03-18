import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Add from "../Pages/Menu/Add";
import Login from "../Pages/Auth/login";
import Register from "../Pages/Auth/register";
import Search from "../Pages/Menu/Search/index";
import Edit from "../Pages/Menu/Edit/";
import Detail from "../Pages/Menu/Detail/";
import AuthChecker from "../Component/utils/AuthChecker";
import ScrollToTop from "../Component/utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/profile"
          element={
            <AuthChecker>
              <Profile />
            </AuthChecker>
          }
        />

        <Route
          path="/add"
          element={
            <AuthChecker>
              <Add />
            </AuthChecker>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/search"
          element={
            <AuthChecker>
              <Search />
            </AuthChecker>
          }
        />
        <Route
          path="/Menu/edit/:id"
          element={
            <AuthChecker>
              <Edit />
            </AuthChecker>
          }
        />
        <Route path="/Menu/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
