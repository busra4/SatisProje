import React, {Component} from 'react';

//deneme icin yapilmistir dikkate almayiniz
import { StyleSheet,
  Text,
  View,
  TouchableOpacity ,
  StatusBar,
  Button,
 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';


export default class Deneme extends Component{
  render(){
    return(

      <View style={styles.cantainer}>

<TextInput

style={styles.inputBox} 
underlineColorAndroid='#000' 
placeholder="Password"
secureTextEntry={true}
placeholderTextColor="#000000"
secureTextEntry
right={<TextInput.Icon name="eye" />}
theme={{ colors: {
placeholder: 'white'
},
roundness: 25 }} 
mode="outlined"/>

      <StatusBar backgroundColor='#521be3' barStyle='light-content' />
      <View style={styles.yanYana}>
      <TouchableOpacity style={styles.touch} onPress={()=>{ this.props.navigation.
    navigate('App')}}>
      <Text style={styles.text}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => { this.props.navigation.
    navigate('UyeOl')}}>
        <Text style={styles.text}>Üye Ol</Text>
      </TouchableOpacity>
      </View>
      
      <Text style={styles.headerTxt}>Hadi, {"\n"}
      seni aramıza katalım. 🥳</Text>
      
      <View style={styles.subView}>
        
  
      <TextInput 
           style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder="E-mail"
           placeholderTextColor='black'
           />
        
      <TextInput
           style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder="Password"
           secureTextEntry={true}
           placeholderTextColor="#000000"
           />

      <Text style={styles.ForgetTxt} >Şifreni belirlerken en az 7 karakterli olmasına,
      {"\n"} büyük, küçük harf, rakam içermesine dikkat et. </Text>
      <View style={styles.yanYana2}>
      <TouchableOpacity style={styles.touch2} onPress={()=>{ this.props.navigation.
       navigate('App')}}>
   
      <Text style={styles.text2}>Google ile giriş</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch2} 
      onPress={() => { this.props.navigation.navigate('UyeOl')}}>
      <Text style={styles.text2}>Facebook ile giriş</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.endView}>
       <TouchableOpacity
       style={styles.endBtn}
       onPress={() => { this.props.navigation.navigate('HesapOnay')}}>
         <Text style={styles.loginTxt}>Üye Ol</Text>
       </TouchableOpacity>
     </View>
   </View>
 </View>

      );
  }
}

const styles = StyleSheet.create({

ForgetTxt:{
  color:'black',
  marginLeft:50,
  marginTop:25,
},

//touchable yap şifremi unuttum yazısını
cantainer: {
  backgroundColor: '#521be3',
  height: 1000,
},

subView: {
  backgroundColor: 'white',
  height: 430,
  marginTop: 0,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
},

headerTxt: {
  fontSize: 40,
  marginLeft: 40,
  fontWeight: 'bold',
  color: 'white',
  position: 'absolute',
  marginTop: 70,
},

subTxt: {
  color: 'black',
  marginTop: 20,
  fontSize: 30,
  fontWeight: 'bold',
  marginLeft: 40,
},

nameInput: {
  height: 40,
  width: 270,
  marginLeft: 40,
  borderBottomWidth: 1,
  marginTop: 30,
},

btn: {
  height: 50,
  width: 200,
  backgroundColor: 'blue',
  borderRadius: 80,
  borderWidth: 2,
  marginLeft: 70,
  marginTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
},

btnTxt: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 15,
},

endView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

endTxt: {
  fontSize: 15,
  marginTop: 30,
  marginLeft: 60,
  fontWeight: 'bold',
},

endBtn: {
  marginLeft: 150,
  backgroundColor: '#521be3',
  paddingHorizontal: 30, 
  borderRadius:25,
  margin:(30,15,15,15),
  marginLeft:150
},

loginTxt: {
  fontSize: 15,
  fontWeight: 'bold',
  marginTop: 15,
  marginBottom:15,
  color:'#fff0f3',
},

touch:{marginTop:0,
  backgroundColor:'#cddafd',
  paddingHorizontal: 60, 
  paddingVertical:10,
  borderRadius:25,
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
},

touch2:{marginTop:0,
  backgroundColor: '#521be3',
  paddingHorizontal: 20, 
  paddingVertical:10,
  borderRadius:25,
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  },

text:{
  fontSize:18,
  color:'#0d47a1',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  fontWeight: 'bold',
},

text2:{
  fontSize:18,
  color:'#fff',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  fontWeight: 'bold',
},

yanYana:{
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  marginTop:250,
  paddingHorizontal: 20, 
  paddingVertical:10,
},

yanYana2:{
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  marginTop:20,
  paddingHorizontal: 20, 
  paddingVertical:10,
},

inputBox:{
  width:320,
  backgroundColor:'rgba(206,212,218,0.3)',
  borderRadius:25,
  paddingHorizontal:25,
  fontSize:16,
  color:'#000000', //email password text color
  marginVertical:0,
  marginLeft:45,
  marginTop:15
},

});

