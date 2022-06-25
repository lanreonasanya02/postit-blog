import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import FullStory from "./pages/FullStory";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Stories from "./pages/Stories";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="stories" element={<Stories />} />
          <Route path="viewStory" element={<FullStory />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Welcome />} />
          <Route path="create" element={<Create />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
