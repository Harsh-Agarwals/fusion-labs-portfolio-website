import "./App.css";
import Header from "./pages/Header";
import Navbar from "./Components/Navbar";
import Features from "./pages/Features";
import Footer from "./pages/Footer";

function App() {
    return (
        <>
            <div className="header">
                <Header />
                <Navbar />
            </div>
            <div className="section">
                <Features />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
