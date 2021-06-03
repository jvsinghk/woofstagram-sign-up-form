import React, {useState} from 'react';
import { View } from 'react-native';
import LabelInput from './components/LabelInput';
import PasswordInput from './components/PasswordInput';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petDob, setPetDob] = useState('');
  const [breed, setBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');
  
return (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
    <LabelInput 
      label='Email' 
      placeholder='Enter email'
      value={email}
      handleChange={setEmail} 
    />
    <PasswordInput
     label='Password'
     placeholder='Enter password'
     value={password}
     handleChange={setPassword}
    />
    <PasswordInput
     label='Retype Password'
     placeholder='Enter password'
     value={retypePassword}
     handleChange={setRetypePassword}
    /> 
    <LabelInput
      label={`Pet's Name`}
      placeholder={`Enter pet's name`}
      value={petName}
      handleChange={setPetName}
    /> 
    <LabelInput
      label={`Pet's Date of Birth`}
      placeholder={`Enter pet's date of birth`}
      value={petDob}
      handleChange={setPetDob} 
    />
    <LabelInput 
      label='Breed'
      placeholder='Enter Breed'
      value={breed}
      handleChange={setBreed}
    />
    <LabelInput
      label='Favorite Toy'
      placeholder='Enter favorite toy'
      value={favoriteToy}
      handleChange={setFavoriteToy}
    />
  </View>
)};

export default App;
