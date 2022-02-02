import React, {Component} from 'react';
import {Image} from 'react-native'
import { StyleSheet,Text,View,TouchableOpacity,TextInput,StatusBar,BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HesapOnay extends Component{

  render(){
    return(
      <View style={styles.cantainer}>
      <StatusBar backgroundColor='#edede9' barStyle='light-content' />
      <TouchableOpacity style={styles.backArrow} onPress={()=>{ this.props.navigation.navigate('UyeOl')}}>
 
      <Icon name='arrow-circle-left' size={35} color='#023e8a'/>
  
  
    
 
     
   
      </TouchableOpacity>
      <Image style={styles.img} source={require('./i-sell.png')} />
      <Text style={styles.text}>Sana bir kod gönderdik.{"\n"}{"\n"}
        E-posta adresini onaylamak için kodu aşağıdaki alan gir.</Text>
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="kod"
                placeholderTextColor='black'
                />

        <TouchableOpacity style={styles.ileriBtn} >
          </TouchableOpacity>     
        
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('ProfilSec')}}>
          <Text style={styles.text}>ilerleee.</Text>

          </TouchableOpacity>
 </View>

    );
  }
}
//      <Image source={require('./i-sell.png')} style={{width:250,height:200,marginLeft:80}} />
const styles = StyleSheet.create({

cantainer: {
backgroundColor: '#edede9',
flex:1
},
text:{
  color:'#023e8a',
  fontSize:30,
  textAlign:'center',
  fontWeight:'bold',
  marginTop:-20

},
img:{
width:250,
height:250,
marginLeft:95,
marginTop:-10
},
inputBox:{
  borderRadius:25,
  backgroundColor:'white',
  width:300,
  marginHorizontal:50,
  marginVertical:50,

},

ileriBtn:{

},

backArrow:{
  marginHorizontal:15,
  marginTop:30
}

});