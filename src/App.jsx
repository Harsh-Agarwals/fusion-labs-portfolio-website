import "./App.css";
import Header from "./pages/Header";
import Navbar from "./Components/Navbar";
import Features from "./pages/Features";

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
        </>
    );
}

export default App;
