import React from "react";
import { Dimensions, StyleSheet,Text, View } from "react-native";

const BackgroundHeader =() =>{
    return(
        <><View style={styles.header}>
        <Text style={styles.text}></Text>
      </View>
        </>
    
    );
};
export default BackgroundHeader;
const styles = StyleSheet.create({
    header: {
        height:170,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        position:"relative",
        bottom:-30,
        padding: 15,
        backgroundColor:'rgb(217,237,238)',
        
      },
});