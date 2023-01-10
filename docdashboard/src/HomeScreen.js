
import React, { PureComponent } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Rating=({rating})=>{
    return(
        <View style={styles.rating}>
            {Array(5).fill(0).map((_,i) =>{
                if(rating > i){
                    return <AntDesign name="star" color="#fa8d00" style={{marginRight:5}}/>;
                }
                return <AntDesign color="#fa8d00"name="star" style={{marginRight:5}}/>;
            })}
        </View>
    );
};


const HomeScreen =() =>{
    return (
        <View style={styles.cardContainer}>
        <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading}>Your consultations</Text>
            <TouchableOpacity>
            <Text style={styles.cardMore}>See All</Text>
            </TouchableOpacity>
        </View>
        <View >
            <View style={styles.cardBody}>
            <Image 
            style={styles.cardAvatar} 
            source={{
                uri:'https://thumbs.dreamstime.com/b/human-beauty-portraits-expressions-young-attractive-man-smiling-happy-face-isolated-gray-close-up-portrait-handsome-153355653.jpg',
            }} />
            <View style={styles.cardLeftSide}>
                <Text style={styles.cardName}>Paxton T</Text>
                <Icon name="calendar" color="0C2D48" size={20} style={{top:6,}}/>
                <Text style={styles.cardDate}>Monday, Nov 20, 2022</Text>
                <Icon name="clock" color="0C2D48" size={20} style={{top:7}}/>
                <Text style={styles.cardTime}>8.00am - 9.00am</Text>
                <TouchableOpacity style={{left:24,top:5}}> 
                  <Text style={{textDecorationLine:'underline',color:'#0000f1'}}>View Details</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading1}>Doctors in your Field</Text>
            <TouchableOpacity>
            <Text style={styles.cardMore1}>See All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardBody1}>
            <Image 
            style={styles.cardAvatar} 
            source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHLd6jUC6iVBTUc3Z1uzJZFaB2a7if7AXcg&usqp=CAU',
            }} />
            <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>Wellness</Text>
                <Text style={styles.cardName}>Dr Ayon Denrick</Text>
                <Text style={styles.cardTime1}>Popular Pharma Limited</Text>
                <Text style={styles.cardAddress1}> Dermatologist</Text>
                <Text style={styles.cardAddress2}>San Francisco, CA</Text>
                <TouchableOpacity style={{left:24,top:5}}> 
                  <Text style={{textDecorationLine:'underline',color:'#0000f1',left:-23,top:-5}}>View Details</Text>
                </TouchableOpacity>
                <Rating/>
            </View>
            </View>
            <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading2}>Frequently Played</Text>
            <TouchableOpacity>
            <Text style={styles.cardMore2}>See All</Text>
            </TouchableOpacity>
        </View>
        <View>
        <Image  style={styles.cardFreq} source={require('./vp1.jpg')} />
        {/* <Image  style={styles.cardFreq1} source={require('./vp1.jpg')} /> */}
        </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    cardHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
    },
    cardHeading:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:69,
        left:15,
    },
    cardMore:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:69,
        right:10,
        textDecorationLine:'underline',
    },
    cardAvatar:{
        height:45,
        width:45,
        backgroundColor:'gray',
        borderRadius:60,
    },
    cardBody:{
        flexDirection:'row',
        top:69,
        padding:12,
        backgroundColor:'#fff',
        margin:15,
        borderRadius:10,
    },
    cardLeftSide:{
        paddingHorizontal:10,
        flex:1,
    },
    cardName:{
        color:'#222',
        fontSize:17,
        fontWeight:'bold',
        top:-1,
    },
    cardDate:{
        color:'#222',
        fontSize:15,
        fontWeight:'400',
        marginTop:-13,
        marginLeft:25,
    },
    cardTime:{
        color:'#222',
        fontSize:14,
        fontWeight:'400',
        marginTop:-11,
        left:23,
    },
    cardTime1:{
        color:'#222',
        fontSize:14,
        fontWeight:'400',
        marginTop:1,
        left:1,
    },
    cardAddress2:{
        color:'gray',
        fontSize:14,
        fontWeight:'500',
        marginTop:3,
        left:1,
    },
    iconMore:{
        position:'absolute',
        bottom:0,
        right:0,
    },

    cardMore1:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:69,
        right:10,
        textDecorationLine:'underline',
    },
    cardHeading1:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:69,
        left:15,
    },
    cardBody1:{
        flexDirection:'row',
        top:69,
        padding:12,
        backgroundColor:'#fff',
        margin:15,
        borderRadius:10,
    },
    cardAddress1:{
        color:'gray',
        fontSize:14,
        fontWeight:'500',
        marginTop:3,
        left:-3,
    },
    rating:{
        flexDirection:'row',
        marginTop:5,

    },
    cardMore2:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:69,
        right:10,
        textDecorationLine:'underline',
    },
    cardHeading2:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:69,
        left:15,
    },
    cardFreq:{
        width:150,
        height:110,
        left:20,
        top:80,
    },
    // cardFreq1:{
    //     width:150,
    //     height:110,
    //     left:190,
    //     top:-30,
    // },

    

});

export default HomeScreen
