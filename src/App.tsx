import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header } from './components';
import { HomePage, AboutPage, TransactionPage } from "./pages";
// import { Header } from "./components";
// import Footer from "./components/shared/Footer/Footer";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
