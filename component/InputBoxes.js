import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal} from 'react-native';

const InputBoxes = props =>{

    const [input, setInput] = useState('');
    const newInput = (text) => {
        setInput(text);
    };

    return(
        <Modal visible={props.visible} animationType="slide">
     <View style = {styles.inputBox} >
        <TextInput
            placeholder = 'Course Goal' 
            style = {styles.input} 
            onChangeText = {newInput} 
            value = {input} />
            <View style={styles.buttonBox}>
        <View style={styles.button}>
        <Button title='Cancel' color='red' onPress={props.onCancel} />
        </View>
        <View style={styles.button}>
        <Button
           title="ADD"
            onPress={
                ()=>{
                    props.onAdd(input);
                     setInput('')}} />
                     </View>
        </View>
      </View>
      </Modal>
)};

const styles=StyleSheet.create({
    inputBox : {
        justifyContent: 'center' ,
        alignItems: 'center' ,
        flex: 1
      },
      input : {
        width: '80%' ,
        borderColor: 'black' ,
        borderWidth: 1 ,
        padding: 10 ,
        marginVertical: 10
      },
      buttonBox : {
        flexDirection: 'row' ,
        justifyContent: 'space-between' ,
        width: '60%'
      },
      button : {
        width: '40%'
      }
});

export default InputBoxes;
