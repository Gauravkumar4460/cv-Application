import 'react';
import {useState} from 'react';
import {Form,Resume} from './components.jsx';
import './App.css';

function App() {
  const [clicked,setClicked] = useState('reset');
  const [formInputs, setFormInputs] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    gender : 'Male',
    DOB : '',

    collegeName : '',
    course : 'B.Tech',
    stream : 'CSE',
    YOP : '',

    companyName : '',
    positionTitle : '',
    responsibility : '',
    joiningDate : '',

  });
  function handleClick(e){
    setClicked(e.target.className);
    console.log(`${e.target.className} clicked`);
  }
  function handleFormInputs(event) {
      const {id,value} = event.target;
      console.log(`${event.target.id} changed to ${event.target.value}`);
      setFormInputs(formInputs => ({
        ...formInputs,
        [id]: value
      }));
  }
  
  
  return (
    <>
    
    {clicked === 'reset' ? <Form submitHandler={handleClick} formHandler={handleFormInputs} formInputs={formInputs}/> : <Resume resetHandler={handleClick} details={formInputs}/> }

    </>
  )
}

export default App
