import "./App.css";
import Header from "./sections/Header";
import Navbar from "./Components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Subscription from "./sections/Subscription";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import TechStacks from "./sections/TechStacks";

function App() {
    return (
        <>
            <div className="header">
                <Header />
                <Navbar />
            </div>
            <div className="services">
                <Services />
            </div>
            <div className="section">
                <Features />
            </div>
            <div className="why-us">
                <WhyUs />
            </div>
            <div className="tech-stacks">
                <TechStacks />
            </div>
            {/* <div className="video-message"></div> */}
            <div className="projects"></div>
            {/* <div className="blogs"></div> */}
            <div className="testimonials"></div>
            {/* <div className="companies"></div> */}
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
