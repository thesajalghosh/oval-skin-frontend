import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import Dashboard from './pages/Dashboard';
import SingleUserDetails from './pages/SingleUserDetails';

function AppLayout() {
  const location = useLocation();
  const isDashboard = location.pathname.split('/')[1] === 'dashboard';

  if (isDashboard) {
    return (
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/user-details/:user_id' element={<SingleUserDetails/>}/>
      </Routes>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full h-full md:w-[27vw] md:h-[100vh] bg-[#FAF9F5]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/question-page/:user_id" element={<QuestionPage />} />
          <Route path="/result-page/:user_id" element={<ResultPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;