import './App.css';
import AppNavBar from './components/AppNavBar';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

//react-router
//BrowserRouter as Router(alternative)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;