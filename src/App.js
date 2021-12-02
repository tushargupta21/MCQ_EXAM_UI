import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Teacherlogin from './components/TeacherLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherHomepage from './components/TeacherHomepage';
import UserHomepage from './components/UserHomepage';
import StudentsList from './components/StudentsList';
import Addexam from './components/Addexam';
import Studenthomepage from './components/Studenthomepage';
import Exampage from './components/Exampage';
function App() {
  return (
   <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/teacherlogin" element={<Teacherlogin/>}/>
    <Route exact path="/teachersignup" element={<TeacherSignup/>}/>
    <Route exact path="/teacherhomepage" element={<TeacherHomepage/>}/>
    <Route exact path="/userhomepage" element={<UserHomepage/>}/>
    <Route exact path="/studentlist" element={<StudentsList/>}/>
    <Route exact path="/addexam" element={<Addexam/>}/>
    <Route exact path="/studenthomepage" element={<Studenthomepage/>}/>
    <Route exact path="/exampage" element={<Exampage/>}/>
  
    </Routes>
    </Router>
   </>
  );
}

export default App;
