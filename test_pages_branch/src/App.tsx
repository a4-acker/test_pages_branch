
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import A from './pages/A';
import Home from './pages/Home';

function App() {
    const repositoryName = 'test_pages_branch';

    return (
        <Router basename={`/${repositoryName}`}>
            <nav>
                <button><Link to="/A">Go to A</Link></button>
                <button><Link to="/A">Go to A</Link></button>
                <button><Link to="/A">Go to A</Link></button>
                <button><Link to="/A">Go to A</Link></button>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/A" element={<A />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App
