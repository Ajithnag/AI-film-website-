import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import FilmDetail from './pages/FilmDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-secondary text-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/film/:id" element={<FilmDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
