import './App.css';
import CategoryPage from './pages/CategoryPage';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MenuDetailPage from './pages/MenuDetailPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/category-page' element={<CategoryPage />} />
                    <Route path='/menu/:urlKey' element={<MenuDetailPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
