import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import ContactDetailPage from '../pages/ContactDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/contacts/:id" element={<ContactDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default AppRoutes;
