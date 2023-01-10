import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet,ScrollView, Text, View, Dimensions} from 'react-native';
import BackgroundHeader from './src/components/BackgroundHeader';
import BottomTab from './src/components/BottomTab';
import HomeScreen from './src/HomeScreen';


const App = () => {
  return (
    <>
   <StatusBar barStyle="dark-content"/>
   <View style={styles.container}>
    <BackgroundHeader/>
    <ScrollView style={styles.scrollView}>
    </ScrollView>
    <HomeScreen  />
    <BottomTab/>
   </View>
  
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'whitesmoke',
    
  },
  bg:{
    position:'absolute',
    // width: Dimensions.get("window").width,

  },
  scrollView:{
    flex:1,
  },
});
export default App;

