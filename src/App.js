import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Customer/SignUp';
import LogIn from './components/Customer/Login';
import EmployeeLogin from './components/Admin/EmployeeLogin';
import EmployeeSignUp from './components/Admin/EmployeeSignUp';
import ConsultantSignUp from './components/Admin/ConsultantSignUp';
import ConsultantLogin from './components/Admin/ConsultantLogin';
import BusinessLogin from './components/Admin/BusinessLogin';
import BusinessSignUp from './components/Admin/BusinessSignUp';
import BusinessForm from './components/Admin/BusinessForm';
import BusinessManage from './components/Admin/BusinessManage';
import ConsultantManage from './components/Admin/ConsultantManage';
import ConsultantChat from './components/Admin/ConsultantChat';
import Employee from './components/Admin/EmployeeManage';
import EmployeeForm from './components/Admin/EmployeeForm';
import HomePage from './components/Customer/HomePage';
import Jobs from './components/Customer/Jobs';
import Consultant from './components/Customer/Consultant';
import Chat from './components/Customer/Chat';
import Posts from './components/Customer/Posts';


function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
        <Route path="/EmployeeSignUp" element={<EmployeeSignUp />} />
        <Route path="/ConsultantSignUp" element={<ConsultantSignUp />} />
        <Route path="/ConsultantLogin" element={<ConsultantLogin />} />
        <Route path="/BusinessSignUp" element={<BusinessSignUp />} />
        <Route path="/BusinessLogin" element={<BusinessLogin />} />
        <Route path="/BusinessForm" element={<BusinessForm />} />
        <Route path="/BusinessManage" element={<BusinessManage />} />
        <Route path="/ConsultantManage" element={<ConsultantManage />} />
        <Route path="/ConsultantChat" element={<ConsultantChat />} />
        <Route path="/Employee" element={<Employee />} />       
        <Route path="/EmployeeForm" element={<EmployeeForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Register" element={<SignUp />} />        
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/Consultant" element={<Consultant/>} />
        <Route path="/Chat" element={<Chat/>} />
        <Route path="/Posts" element={<Posts/>} />
      </Routes>
    </Router>
  );
}

export default App;
