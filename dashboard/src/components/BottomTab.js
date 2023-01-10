import React from "react";
import { StyleSheet,Text, View,TouchableOpacity} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

const menus=['home','search1','Safety','pluscircleo','user'];

const BottomTab =() =>{
    return(
        <View style={styles.bottoms}>
            {menus.map(e =>{
                return(
                  <TouchableOpacity key={e}>
                    <AntDesign name={e} size={25} color='#0C2D48' />
                  </TouchableOpacity>
                );
            })}
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
        paddingBottom:5,
    }
});