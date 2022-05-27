
import './App.css';
import CustomerList from './components/CustomerList';
import EmployeeList from './components/EmployeeList';
import HobbySelector from './components/HobbySelector';
import UserMessage from './components/UserMessage';
function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href="/" className="navbar-brand" >React With Conditional Rendering</a>
      </nav>
      {/* <UserMessage/> */}
      {/* <HobbySelector/> */}
      {/* <EmployeeList/> */}
      <CustomerList/>
     
    </div>
  );
}

export default App;
