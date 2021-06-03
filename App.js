import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import LabelInput from './components/LabelInput';
import PasswordInput from './components/PasswordInput';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petDob, setPetDob] = useState('');
  const [breed, setBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');
  
return (
  <ScrollView 
    style={{ 
      flex: 1, 
      backgroundColor: '#ecf0f1', 
      padding: 16 
    }}>
    <LabelInput 
      label='Email' 
      placeholder='Type your email here'
      value={email}
      handleChange={setEmail} 
    />
    <PasswordInput
     label='Password'
     placeholder='Type your password here'
     value={password}
     handleChange={setPassword}
    />
    <PasswordInput
     label='Confirm Password'
     placeholder='Enter password'
     value={confirmPassword}
     handleChange={setConfirmPassword}
    /> 
    <LabelInput
      label='Name'
      placeholder={`Type your pet's name here`}
      value={petName}
      handleChange={setPetName}
    /> 
    <LabelInput
      label='Bithday'
      placeholder={`Type your pet's date of birth here`}
      value={petDob}
      handleChange={setPetDob} 
    />
    <LabelInput 
      label='Breed'
      placeholder={`Type your pet's breed here`}
      value={breed}
      handleChange={setBreed}
    />
    <LabelInput
      label='Favorite Toy'
      placeholder={`Type your pet's favorite toy here`}
      value={favoriteToy}
      handleChange={setFavoriteToy}
    />
  </ScrollView>
)};

export default App;
