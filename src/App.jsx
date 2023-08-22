import Enter from './components/enter/Enter';
  import { Router, Routes, Route } from "react-router-dom";
import SignUp from './components/enter/SignUp';
function App() {
  return (
    <div >
      {/* <Router>
        <Routes>
          <Route path='/login' element = {<Login />} />
          <Route  path='/signup' element = {<SignUp />} />
        </Routes>
      </Router> */}
      <SignUp />
    </div>
  );
}

export default App;
