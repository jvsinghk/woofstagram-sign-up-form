import React from 'react';
import { View, Text, TextInput } from 'react-native';


function LabelInput({label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing }) {

    return (
        <View style={{padding: 16}}>
            <Text style={{padding: 8, fontSize: 18}}>{label}</Text>
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                style={{padding: 8, fontSize: 18}} 
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    );
}

export default LabelInput;