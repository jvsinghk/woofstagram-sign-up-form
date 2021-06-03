import React from 'react';
import { View, Text, TextInput } from 'react-native';

function LabelInput({label, placeholder, value, handleChange }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput placeholder={placeholder} value={value} onChangeText={handleChange} />
        </View>
    );
}

export default LabelInput;