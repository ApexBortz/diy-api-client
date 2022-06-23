import './App.css';
import Home from './components/pages/Home';
import BlogPost from './components/pages/BlogPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <Router>

      <main className="App">

        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/blog/:id' element={<BlogPost />} />
        </Routes>

      </main>

    </Router>
    
  );
}

export default App;
