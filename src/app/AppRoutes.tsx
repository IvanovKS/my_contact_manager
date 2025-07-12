import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
  );
}

export default AppRoutes;
