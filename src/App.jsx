import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Composants/Header.jsx";
import Error from "./Composants/Error.jsx";
import Footer from "./Composants/Footer.jsx";
import Accueil from "./pages/Accueil.jsx";
import Apropos from "./pages/Apropos.jsx";
import Logement from "./pages/Logement.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;


