import React from 'react';
import { View, Text, TextInput } from 'react-native';

function LabelInput({label, placeholder, value, handleChange }) {
    return (
        <View>
            <Text style={{padding: 8, fontSize: 18}}>{label}</Text>
            <TextInput placeholder={placeholder} value={value} onChangeText={handleChange} style={{padding: 8, fontSize: 18}} />
        </View>
    );
}

export default LabelInput;