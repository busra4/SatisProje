import React, {Component} from 'react';
import {Image} from 'react-native'
import { StyleSheet,Text,View,TouchableOpacity,TextInput,StatusBar,BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// https://www.youtube.com/watch?v=Gq8udJJ724Y profil resmi seçmek için
export default class ProfilSec extends Component{

  render(){
    return(
      <View style={styles.cantainer}>
      <StatusBar backgroundColor='#edede9' barStyle='light-content' />
      <TouchableOpacity style={styles.backArrow} onPress={()=>{ this.props.navigation.navigate('UyeOl')}}>
      <Icon name='arrow-circle-left' size={35} color='#023e8a'/>
      </TouchableOpacity>
     
      <Text style={styles.text}>Hadi sana bir profil fotoğrafı koyalım.{"\n"}
      </Text>
      <TouchableOpacity  style={styles.ileriBtn} onPress={()=>{ this.props.navigation.navigate('App')}}>
          <Text style={styles.gec}>Şimdilik geç</Text>
      </TouchableOpacity>
  

 </View>

    );
  }
}
// <Image source={require('./i-sell.png')} style={{width:250,height:250,marginLeft:80}} />
const styles = StyleSheet.create({

cantainer: {
backgroundColor: '#edede9',
height: 1000,
},

text:{
  color:'#023e8a',
  paddingHorizontal:20,
  fontSize:30,
  textAlign:'center',
  fontWeight:'bold',
  marginHorizontal:10
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
},

gec:{
    color:'#023e8a',
    paddingHorizontal:20,
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold',
    textDecorationLine:'underline'
}

});