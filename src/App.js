import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ApiProvider from './contexts/ApiProvider';
import ExplorePage from './pages/ExplorePage';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <ApiProvider>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="user/:username" element={<UserPage />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
    </Container>
  );
}
