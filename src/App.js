import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import {Account} from "./pages/conta"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/conta" element={<Account/>}></Route>
      </Routes>
    </Router> 
  );
}

export default App;
