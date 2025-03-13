import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBrain, FaInfoCircle, FaHeartbeat, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


import Structure from "./pages/Structure";
import Function from "./pages/Function";
import Facts from "./pages/Facts";

function Home() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold text-primary" data-aos="fade-up">آشنایی با مغز انسان 🧠</h1>
      <p className="lead text-secondary" data-aos="fade-up">
        مغز، شگفت‌انگیزترین عضو بدن است که مسئول حافظه، احساسات و کنترل تمام فعالیت‌ها می‌باشد.
      </p>
      <img
        src="/brain.jfif"
        alt="مغز انسان"
        className="img-fluid rounded shadow-lg mt-4"
        width="400px"
        data-aos="zoom-in"
      />
      
     
      <div className="row mt-5">
        <div className="col-md-4" data-aos="flip-left">
          <div className="card shadow p-3">
            <FaInfoCircle className="text-primary display-4" />
            <h3 className="mt-3">ساختار مغز</h3>
            <p>مغز از سه بخش اصلی: مخ، مخچه و ساقه مغز تشکیل شده است که هرکدام وظایف خاصی دارند.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-left">
          <div className="card shadow p-3">
            <FaHeartbeat className="text-danger display-4" />
            <h3 className="mt-3">عملکرد مغز</h3>
            <p>مغز پیام‌های عصبی را پردازش کرده و حرکات، احساسات و تصمیم‌گیری‌ها را کنترل می‌کند.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-left">
          <div className="card shadow p-3">
            <FaLightbulb className="text-warning display-4" />
            <h3 className="mt-3">نکات جالب</h3>
            <p>مغز حدود ۸۶ میلیارد نورون دارد و تنها ۲۰ وات انرژی مصرف می‌کند؛ معادل یک لامپ LED!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Vazirmatn', sans-serif" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow">
          <div className="container">
            <Link className="navbar-brand text-white fw-bold" to="/">
              <FaBrain className="mb-1" /> زیست‌شناسی | مغز انسان
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link text-white" to="/">خانه</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/structure">ساختار مغز</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/function">عملکرد مغز</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/facts">نکات جالب</Link></li>
              </ul>
            </div>
          </div>
        </nav>

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/function" element={<Function />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>

     
        <footer className="bg-primary text-center text-white py-3 mt-5">
          <p>© 2025 کلیه حقوق محفوظ است، طراحی شده توسط صفدری</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
