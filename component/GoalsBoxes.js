import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoalsBoxes = props => {
    return(
    <TouchableOpacity onPress={props.onRemove.bind(this, props.id )} >
        <View style = {styles.boxes}>
        <Text style={styles.txt} > {props.value} </Text>
        </View>
        </TouchableOpacity>);
};
const styles=StyleSheet.create({
    boxes : {
        padding: 10 ,
        backgroundColor: '#ccc',
        borderColor: 'black' ,
        borderWidth: 1 ,
        marginTop: 10
      },
      txt:{
        fontFamily:'open-sans-bold'
      }
}
);
export default GoalsBoxes;