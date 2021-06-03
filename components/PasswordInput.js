import React from 'react';
import { View, Text, TextInput } from 'react-native';

function PasswordInput({label, placeholder, value, handleChange }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput placeholder={placeholder} value={value} onChangeText={handleChange} secureTextEntry />
        </View>
    );
}

export default PasswordInput;