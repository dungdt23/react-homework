import './App.css';
import Profile from './components/Profile/Profile';
import Select from './components/Profile/Select';
import Counter from './components/Counter/Counter';
import { useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import RegisterForm from './components/Form/RegisterForm';

function App() {
const [selectedValue, selectedAction] = useState(1);
const options = [
    { value: 1, label: 'Welcome' },
    { value: 2, label: 'Counter'},
    { value: 3, label: 'Pokemon'},
    { value: 4, label: 'RegisterForm'}
  ];
  let appStyle1 = { backgroundColor: "red" };
  let appStyle2 = { backgroundColor: 'yellow' };
  let appStyle3 = { backgroundColor: 'green' };
  const handleOnChange = (event) => {
    console.log(event.target.value);
    selectedAction(+event.target.value);
  }
  let profile1 = {
    name: 'Hello Hoangdd',
    age: 34,
  };
  let profile2 = {
    name: 'Hello Son Tung MTP',
    age: 25,
  };
  let profile3 = {
    name: 'Hello Ronaldo',
    age: 37,
  };
  return (
    <div style={{ fontSize: "25px", width: "50%" }} we>
      <Select
        options={options}
        name="select "
        onChange={handleOnChange}
        value={selectedValue}
      />
      {selectedValue === 1 && (
        <div className="profile">
          <Profile profile={profile1} appStyle={appStyle1} />
          <Profile profile={profile2} appStyle={appStyle2} />
          <Profile profile={profile3} appStyle={appStyle3} />
        </div>
      )}
      {selectedValue === 2 && (
        <div className="counter">
          <Counter />
        </div>
      )}
      {selectedValue === 3 && (
        <div className="pokemon">
          <Pokemon />
        </div>
      )}
      {selectedValue === 4 && (
        <div className="registerForm">
          <RegisterForm />
        </div>
      )}
    </div>
  );
}
export default App;