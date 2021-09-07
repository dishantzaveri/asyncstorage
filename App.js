import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={this.saveData}>
           <Text>Click here to save data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
           <Text>Click here to display data</Text>
        </TouchableOpacity>

      </View>       
    );
  }

 saveData(){

     let obj={
     name:'Dishant Zaveri',
     email:'zaveridishant@gmail.com ',
     city:'Mumbai',
     }
    AsyncStorage.setItem('user',JSON.stringify(obj));
  }
  displayData=async()=> {
    try{
      let user = await AsyncStorage.getItem('user');
      let parsed =JSON.parse(user);
    alert(parsed.name)
    alert(parsed.email)  
    alert(parsed.city)      
    }
  catch(error){
    alert(error);
  }
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'pink',
    alignItems:'center',
    justifyContent:'center',
    
  },
});