import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Eventpage from './Pages/EventPage/Eventpage';
// import ContactUs from './Components/ContactUs/ContactUs';
import './index.css';

const rootElement = document.getElementById('root');

const app = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<Eventpage />} />
      {/* <Route path="/contact" element={<ContactUs />} /> */}
    </Routes>
  </Router>
);

// Use createRoot to render the app
const root = ReactDOM.createRoot(rootElement);
root.render(app);