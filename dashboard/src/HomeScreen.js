import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

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


const HomeScreen = () => {
  return (
    
    <>
   <View style={styles.container}>
    <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi Carly!</Text>
        <Text style={styles.desc}>How are you feeling today?</Text>
    </View>
    <View style={styles.faceContainer}>
        <Face icon="laughing" title="Great" color="#0C2D48"/>
        <Face icon="slightly-smile" title="Good" color="#0C2D48" />
        <Face icon="neutral" title="Okay" color="#0C2D48" full/>
        <Face icon="frowning" title="Bad" color="#0C2D48"/>
        <Face icon="expressionless" title="Awful" color="#0C2D48"/>
    </View>
   <View>
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
                uri:'https://www.shutterstock.com/image-photo/young-africanamerican-doctor-on-color-260nw-1636051924.jpg',
            }} />
            <View style={styles.cardLeftSide}>
                <Text style={styles.cardName}>Dr T Leena</Text>
                <Text style={styles.cardTime}>Sunday,May 15th at 8:00 PM</Text>
                <Text style={styles.cardAddress1}> 570 Kemmer Shores</Text>
                <Text style={styles.cardAddress2}>San Francisco, CA 902293</Text>
                <TouchableOpacity style={styles.iconMore}>
                    <Icon name="angle-right" color="0C2D48" size={15}/>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </View> 
   </View>
   <View>
   <View style={styles.cardContainer}>
        <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading1}>Doctors Near You</Text>
            <TouchableOpacity>
            <Text style={styles.cardMore1}>See All</Text>
            </TouchableOpacity>
        </View>
        <View >
            <View style={styles.cardBody1}>
            <Image 
            style={styles.cardAvatar} 
            source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHLd6jUC6iVBTUc3Z1uzJZFaB2a7if7AXcg&usqp=CAU',
            }} />
            <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>Wellness</Text>
                <Text style={styles.cardName}>Dr Ayon Denrick</Text>
                <Text style={styles.cardTime}>Popular Pharma Limited</Text>
                <Text style={styles.cardAddress1}> Dermatologist</Text>
                <Text style={styles.cardAddress2}>San Francisco, CA | 5min</Text>
                <Rating/>
                <TouchableOpacity style={styles.iconMore}>
                    <Icon name="angle-right" color="0C2D48" size={15}/>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </View> 
   </View>
   
   <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading2}>Pharmacies Near You</Text>
            <TouchableOpacity>
            <Text style={styles.cardMore2}>See All</Text>
            </TouchableOpacity>
        </View>
        <View >
            <View style={styles.pharCont}>
            <View style={styles.cardBody2}>
            <Image source={{uri:'https://content.jdmagicbox.com/comp/chennai/28/044pf005028/catalogue/apollo-pharmacy-kodambakkam-chennai-chemists-hfdr6az8o7.jpg?clr=333333'}} 
            style={{width:143, height:110,marginTop:-11.5,marginLeft:-11, resizeMode:'contain', borderRadius:10}}/>
            <Text style={styles.pharName}>R.R.Pharmacy</Text>
            </View>
            <View style={styles.cardBody2}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbcrOwYKLZkCPvRrsvYXf6xttUl04RSgRbAlVx_OkSFKgDkLjale4o5wRNnsdrgq4ZxM&usqp=CAU'}} 
            style={{width:143, height:110,marginTop:-11.5,marginLeft:-11, resizeMode:'contain', borderRadius:10}}/>
            <Text style={styles.pharName1}>Apollo Pharmacy</Text>
            </View>
            </View>
        </View>
    </View>  
    
    </>
    
    
  );
};
export default HomeScreen;

// stylesheet
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    heading:{
        color:'#0C2D48',
        fontSize:25,
        fontWeight:'5000',
        position:"relative",
        fontWeight:'bold',
        top:-400,
        left:30,
    },
    desc:{
        fontSize:15,
        color:'#0C2D48',
        position:"relative",
        top:-400,
        left:30,
    },
    faceGroup:{
    },
    faceContainer:{
        backgroundColor:'#fff',
        padding:15,
        top:-290,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20,
        marginHorizontal:20,
        marginTop:-90,
    },
    faceText:{
        fontSize:14,
        marginTop:6,
    },
    cardHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
    },
    cardHeading:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:-284,
        left:15,
    },
    cardHeading1:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:-294,
        left:15,
    },
    cardHeading2:{
        fontSize:17,
        fontWeight:'bold',
        color: '#0C2D48',
        top:-303,
        left:15,
    },
    cardMore2:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:-301,
        right:10,
        textDecorationLine:'underline',
    },
    cardMore1:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:-293,
        right:10,
        textDecorationLine:'underline',
    },
    cardMore:{
        fontWeight:'bold',
        fontSize:13,
        color: '#0C2D48',
        top:-283,
        right:10,
        textDecorationLine:'underline',
    },
    cardAvatar:{
        height:55,
        width:55,
        backgroundColor:'gray',
        borderRadius:60,
    },
    cardBody:{
        flexDirection:'row',
        top:-287,
        padding:12,
        backgroundColor:'#fff',
        margin:15,
        borderRadius:10,
    },
    cardBody1:{
        flexDirection:'row',
        top:-296,
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
    },
    cardTime:{
        color:'#222',
        fontSize:15,
        fontWeight:'400',
        marginTop:2,
    },
    cardAddress1:{
        color:'gray',
        fontSize:14,
        fontWeight:'500',
        marginTop:3,
        left:-3,
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
    tag:{
        color:'#B066a4',
    },
    rating:{
        flexDirection:'row',
        marginTop:5,

    },
    pharCont:{
        flexDirection:'row',
    },
    cardBody2:{
        flexDirection:'row',
        top:-309,
        padding:12,
        backgroundColor:'#fff',
        margin:15,
        borderRadius:10,
        height:138,
        width:145,
    },
    pharName:{
        color:'#222',
        fontSize:15,
        fontWeight:'bold',
        position:'relative',
        top:100,
        left:-120,
    },
    pharName1:{
        color:'#222',
        fontSize:15,
        fontWeight:'bold',
        position:'relative',
        top:100,
        left:-128,
    },
    
});
