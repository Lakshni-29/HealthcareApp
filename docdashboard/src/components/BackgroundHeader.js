import React from "react";
import { Dimensions, StyleSheet,Text, View,Image,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'

const Face = ({icon ,title,color,full})=>{
  return(
      <View style={styles.faceGroup}>
          {full?(
              <View style={{backgroundColor: color, borderRadius:80}}>
        <Icon name={icon} size={25} color={'#fff'} />
      </View>
    ) : (
      <Icon name={icon} size={25} color={color} />
    )}

    <Text style={[styles.faceText, {color}]}>{title}</Text>
      </View>
  );
};

const BackgroundHeader =() =>{
    return(
        <><View style={styles.header}>
          <Image 
            style={styles.cardAvatar} 
            source={{
                uri:'https://www.shutterstock.com/image-photo/young-africanamerican-doctor-on-color-260nw-1636051924.jpg',
            }} />
          <Text style={styles.heading}>Hello Dr.Leena!</Text>
          <Text style={styles.desc}>How was your day ?</Text>
      </View>
      <View style={styles.faceContainer}>
        <Face icon="laughing" title="Great" color="#0C2D48"/>
        <Face icon="slightly-smile" title="Good" color="#0C2D48" />
        <Face icon="neutral" title="Okay" color="#0C2D48"/>
        <Face icon="frowning" title="Bad" color="#0C2D48"/>
        <Face icon="expressionless" title="Awful" color="#0C2D48"/>
    </View>
        </>
    
    );
};
export default BackgroundHeader;
const styles = StyleSheet.create({
    header: {
        height:140,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        position:"relative",
        bottom:-30,
        padding: 15,
        backgroundColor:'rgb(217,237,238)',
        
      },
      heading:{
        color:'#0C2D48',
        fontSize:19,
        fontWeight:'5000',
        position:"relative",
        fontWeight:'bold',
        left:60,
        top:-35,
    },
    desc:{
        fontSize:14,
        color:'#0C2D48',
        position:"relative",
        left:60,
        top:-35,
    },
    cardAvatar:{
      height:43,
      width:43,
      top:7,
      backgroundColor:'gray',
      borderRadius:60,
  },
  faceContainer:{
    backgroundColor:'#fff',
    padding:15,
    top:80,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:20,
    marginHorizontal:20,
    marginTop:-100,
},
});
