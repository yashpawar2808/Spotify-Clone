import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    console.log("App - currentPage updated:", currentPage);
  }, [currentPage]);

  return (
    <div className="mainContainer">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="mainSectionContentContainer">
        {/* Only show sidebar if not on login page */}
        {currentPage !== 'login' && <Sidebar />}
        <MainSection currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;