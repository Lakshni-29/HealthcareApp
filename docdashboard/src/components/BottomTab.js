import React from "react";
import { StyleSheet, View,TouchableOpacity} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'


// const menus=['home','folderopen','search1','playcircleo','user'];

const BottomTab =() =>{
    return(
        <View style={styles.bottoms}>
            
                
                  <TouchableOpacity>
                    <AntDesign name="home" size={25} color='#0C2D48' />
                    <AntDesign name="folderopen" size={25} color='#0C2D48' style={{left:72,top:-25}} />
                    <AntDesign name="search1" size={25} color='#0C2D48' style={{left:140,top:-50}}/>
                    <AntDesign name="playcircleo" size={25} color='#0C2D48' style={{left:210,top:-75}} />
                    <AntDesign name="user" size={25} color='#0C2D48' style={{left:272,top:-100}}/>
                  </TouchableOpacity>
                
            
        </View>
    );
};
export default BottomTab;
const styles = StyleSheet.create({
    bottoms:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingHorizontal:30,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        paddingBottom:-20,
        top:100,
    }
});
