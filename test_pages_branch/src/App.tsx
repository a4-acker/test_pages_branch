
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import A from './pages/A';
import Home from './pages/Home';

function App() {
    const repositoryName = 'test_pages_branch/main';
    const branchName = __BRANCH_NAME__;
    const version = '0.1.2';
    return (
        <Router basename={`/${repositoryName}`}>
            <nav>
                <div>
                    <header>
                        <h1>Welcom to my App</h1>
                        <p style={{ color: 'green', fontWeight: 'bold' }}>
                            Branch: {branchName} | Version: {version}
                        </p>
                    </header>
                </div>
                <button><Link to="/A">Go to A</Link></button>
                <button><Link to="/">Go to Home</Link></button>
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
