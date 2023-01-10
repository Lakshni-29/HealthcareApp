import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import HomeScreen from './src/HomeScreen';
import BackgroundHeader from './src/components/BackgroundHeader';
import BottomTab from './src/components/BottomTab';


const App = () => { 
  return (
    <>
    <StatusBar barStyle="dark-content" /><View style={styles.container}>
      <BackgroundHeader />
      <ScrollView style={styles.scrollView}>
    </ScrollView>
      <HomeScreen/>
      <BottomTab />
      {/* {/* <ScrollView style={styles.scrollView}>
      </ScrollView> */}
       
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'whitesmoke',
  },
  scrollView:{
    flex:1,
  },
});
export default App;