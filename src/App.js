import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
