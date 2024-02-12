/* eslint-disable react/function-component-definition */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, TransactionPage } from "./pages";
import { Header } from "./components";

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
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
