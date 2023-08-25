import Enter from './components/enter/Enter';
import SignUp from './components/enter/SignUp';
import Feed from './components/feed/Feed'
import SelfPage from './components/profile/SelfPage';
import Login from './components/enter/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Enter />}/>
        <Route path='/feed' element={<Feed />} />
        <Route path='/selfpage' element={<SelfPage />} />
      </Routes>
    </Router>
  );
}

export default App;
