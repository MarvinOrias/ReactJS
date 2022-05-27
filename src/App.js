import './App.css';
import AppNavBar from './components/AppNavBar';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';

function App() {
  return (
    <>
      <AppNavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;