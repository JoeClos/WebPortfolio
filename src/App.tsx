import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import './styles/main.css';

function App() {

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <ScrollToTopButton />
    </main>
  )
}

export default App
