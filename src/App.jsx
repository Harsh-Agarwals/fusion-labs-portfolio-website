import "./App.css";
import Header from "./sections/Header";
import Navbar from "./Components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Subscription from "./sections/Subscription";
import Services from "./sections/Services";

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
            <div className="data"></div>
            <div className="services">
                <Services />
            </div>
            <div className="why-us"></div>
            <div className="video-message"></div>
            <div className="projects"></div>
            <div className="testimonials"></div>
            <div className="service-plans"></div>
            <div className="subscription">
                <Subscription />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
