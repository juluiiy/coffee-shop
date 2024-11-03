import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppFooter from '../components/AppFooter';
import CreateAccountPage from '../pages/CreateAccountPage';
import ForYourPleasurePage from '../pages/ForYourPleasurePage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import OurCoffeePage from '../pages/OurCoffeePage';
import SingleCoffeePage from '../pages/SingleCoffeePage';
import { AuthProvider } from '../providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:coffeId" element={<SingleCoffeePage />} />
          <Route path="/our-coffee" element={<OurCoffeePage />} />
          <Route path="/our-coffee/:coffeId" element={<SingleCoffeePage />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasurePage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<CreateAccountPage />} />
        </Routes>
        <AppFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
