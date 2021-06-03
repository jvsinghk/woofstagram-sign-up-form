import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import InputWithLabel from './components/InputWithLabel';
import Constants from 'expo-constants'

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');
  
return (
  <ScrollView 
    style={{ 
      flex: 1,
      padding: Constants.statusBarHeight, 
      backgroundColor: '#ecf0f1', 
    }}>
    <InputWithLabel 
      label='Email' 
      placeholder='Type your email here'
      value={email}
      onChangeText={setEmail} 
    />
    <InputWithLabel
     label='Password'
     placeholder='Type your password here'
     value={password}
     onChangeText={setPassword}
     secureTextEntry
    />
    <InputWithLabel
     label='Confirm Password'
     placeholder='Re-type your password here'
     onSubmitEditing={(e) => {
      confirmPasswordsMatch(e.nativeEvent.text, password);
      }}
      secureTextEntry
    /> 
    <InputWithLabel
      label='Name'
      placeholder={`Type your pet's name here`}
      value={name}
      onChangeText={setName}
      secureTextEntry
    /> 
    <InputWithLabel
      label='Bithday'
      placeholder={`Type your pet's date of birth here`}
      value={birthday}
      onChangeText={setBirthday} 
    />
    <InputWithLabel 
      label='Breed'
      placeholder={`Type your pet's breed here`}
      value={breed}
      onChangeText={setBreed}
    />
    <InputWithLabel
      label='Favorite Toy'
      placeholder={`Type your pet's favorite toy here`}
      value={toy}
      onChangeText={setToy}
    />
  </ScrollView>
)};

export default App;

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

