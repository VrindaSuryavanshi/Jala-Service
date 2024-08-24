import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Home from './components/Home';

import Search from './components/Search';
import Form from './components/Form';

function App() {

  return (

    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />

    <Route path="/form" element={<Form />} />
</Routes>
</Router>
  );
}

export default App;
