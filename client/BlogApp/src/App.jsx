import Blogs from "./components/Blogs";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import AppState from "./components/Function/AppState";
import Homepage from "./components/Homepage";
import Signin from "./components/Authentication/Signin";
import Signup from "./components/Authentication/Signup";
import Auth from "./components/Auth";
import BlogsAdd from "./components/BlogsAdd";
import ShowBlogs from "./components/ShowBlogs";
function App() {
  return (
    <AppState>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage><Blogs/></Homepage>} />
        <Route path="/signin" element={<Auth/>} />
        <Route path="/signup" element={<Auth/>} />
        <Route path="/BlogsCreate" element={<BlogsAdd/>} />
        <Route path="/blogs/:id" element={<ShowBlogs/>} />
      </Routes>
    </Router>
    </AppState>
  );
}

export default App;
