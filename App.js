import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList,Alert ,Text} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import GoalsBoxes from './component/GoalsBoxes';
import InputBoxes from './component/InputBoxes';
import Header from './component/Header';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [visibility, setVisibility]=useState(false);
  let [fonts]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' :require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if(!fonts){
    return <AppLoading/>;
  }
 
  const add = newGoal => {
    if(newGoal==''){
      Alert.alert(
        "you didn't add any goal",
        'Go back to main page',
        [{
          text: "Return",
          onPress: () => setVisibility(false),
          style: 'destructive'
        }
      ])
      return;
    }
    setGoals( current => [...current, {id: Math.random().toString(), value: newGoal}]);
    setVisibility(false);
  };

  const remove = itemId =>{
    setGoals(current =>{
         return current.filter((goal) => goal.id !== itemId);
    })
  };
  
  const modalVisibility = () =>setVisibility(true);
  const cancel = () =>setVisibility(false);
  
  return (
    <View style = {styles.main} >
      <Header onClick={modalVisibility}/>
      <InputBoxes onAdd={add} visible={visibility} onCancel={cancel}/>
      <FlatList data={goals} 
                renderItem = {goal => (<GoalsBoxes id = {goal.item.id} onRemove = {remove} value={goal.item.value} />
                    )}>
        </FlatList>
    </View>
    
  );
};
const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});

