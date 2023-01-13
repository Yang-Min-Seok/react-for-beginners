import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./routes/Detail"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App; 