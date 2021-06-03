import React from 'react';
import { View, Text, TextInput } from 'react-native';

function PasswordInput({label, placeholder, value, handleChange }) {
    return (
        <View>
            <Text style={{padding: 8, fontSize: 18}}>{label}</Text>
            <TextInput placeholder={placeholder} value={value} onChangeText={handleChange} secureTextEntry style={{padding: 8, fontSize: 18}} />
        </View>
    );
}

export default PasswordInput;