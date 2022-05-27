import './App.css';
import AppNavBar from './components/AppNavBar';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <>
      <AppNavBar />
      <Container>
        <Home />
        <CoursePage />
      </Container>
    </>
  );
}

export default App;