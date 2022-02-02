import React, {Component} from 'react';
//import { Button } from 'native-base';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity ,
  StatusBar,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

export default class App extends Component{
  render(){
    return(
        <View style={styles.cantainer}>
          <StatusBar backgroundColor='#ff193b' barStyle='light-content' />
          <View style={styles.yanYana}>
          <TouchableOpacity style={styles.touch} onPress={()=>{ this.props.navigation.
      navigate('Deneme')}}>
          <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => { this.props.navigation.
      navigate('UyeOl')}}>
          <Text style={styles.text}>Üye Ol</Text>
        </TouchableOpacity>
        </View>
    
        <Text style={styles.headerTxt}>HOŞ GELDİN 🥰{"\n"}{"\n"} </Text>

        <Text style={styles.headerTxt2}>
        Hesabın var mı? {"\n"}
        Yoksa{"\n"}
        Buralarda yeni misin?</Text>

        <View style={styles.subView}>
      
          <TextInput style={styles.inputBox}  
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="E-mail"
                placeholderTextColor='black'
                theme={{ 
                  colors: {
                    placeholder: 'white'
                },
                  roundness: 25 
                 }} 
                mode="outlined"
               
                >
                </TextInput>
                
          <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='#000' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#000000"
                secureTextEntry
                right={<TextInput.Icon name="eye" size={30}/>}
                theme={{ colors: {
                  placeholder: 'white'
              },
              roundness: 25 }} 
                mode="outlined"
              
                />

            <Text style={styles.ForgetTxt} >Şifremi Unuttum</Text>
            <View style={styles.yanYana2}>
            <TouchableOpacity  style={styles.touch2} onPress={()=>{ this.props.navigation.
      navigate('HesapOnay')}}>
              <Icon style={styles.iconYer} name='google' size={15} color='#fff'  />
        <Text style={styles.text2}>Google ile giriş</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch2} onPress={() => { this.props.navigation.
      navigate('UyeOl')}}>
        <Icon style={styles.iconYer} name='facebook' size={15} color='#fff'/>
        <Text style={styles.text2}>Facebook ile giriş</Text>
        </TouchableOpacity>
        </View>

          <View style={styles.endView}>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('signup')}>
              <Text style={styles.loginTxt}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
    );
    
  }
  
}
 // uye ol kismindaki en alttaki uye ol butonu e posta kod onaylama sayfasina gonderiyor
 //ilerleye basarsan fotograf secmeye gonderir
 //bazi styles'lar fazladan olabilir duzenlenmesi lazim
const styles = StyleSheet.create({

iconYer:{
marginTop:5,
paddingRight:10,
paddingLeft:5

},
ForgetTxt:{
  color:'#34495e',
  marginLeft:55,
  marginTop:20,
  fontWeight: 'bold',
  textDecorationLine:'underline'

},
//touchable yap şifremi unuttum yazısını
cantainer: {
  backgroundColor: '#ff193b',
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
  marginLeft: 30,
  fontWeight: 'bold',
  color: 'white',
  position: 'absolute',
  marginTop: 45,
},

headerTxt2: {
  fontSize: 30,
  marginLeft: 30,
  fontWeight: 'bold',
  color: 'white',
  position: 'absolute',
  marginTop: 115,
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
  paddingHorizontal: 30, 
  borderRadius:25,
  backgroundColor:'#ff193b',
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


touch:{
  backgroundColor:'#fff0f3',
  paddingHorizontal: 60, 
  paddingVertical:10,
  borderRadius:25,
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between'
},

touch2:{
  marginTop:0,
  backgroundColor:'#ff193b',
  paddingHorizontal: 12, 
  paddingVertical:10,
  borderRadius:25,
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',

},

text:{
  fontSize:18,
  color:'#ff0a54',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',
  fontWeight: 'bold',
},

text2:{
  fontWeight: 'bold',
  fontSize:18,
  color:'#fff',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'space-between',

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
  height:45,
  backgroundColor:'rgba(206,212,218,0.3)',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#000000', //email password text color
  marginVertical:10,
  marginLeft:45,
},
});