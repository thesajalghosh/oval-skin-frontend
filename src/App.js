import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <div className="w-full h-full md:w-[25vw] md:h-[100vh] bg-gray-100 overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/question-page" element={<QuestionPage />} />
            <Route path="/result-page" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
