import "./App.css";
import Header from "./sections/Header";
import Navbar from "./Components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Subscription from "./sections/Subscription";

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
