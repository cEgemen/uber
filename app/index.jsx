import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../constands/appSizes';
import GooglePlacesSearch from '../components/GooglePlacesSearch';
import HomeOptionsCard from '../components/cards/HomeOptionsCard';
import trasportIcon from "../assets/icons/transport.png"
import lunchIcon from "../assets/icons/lunch.png"


export default function Index() {
  return (
    <SafeAreaView >
        <View style={styles.container}>
                <View style = {styles.headerWrapper}>
                       <Text style={styles.headerText}>UBER</Text>
                </View>
                 <GooglePlacesSearch /> 
                <View style={styles.optionsWrapper}>
                   <HomeOptionsCard icon={trasportIcon} text='Get a ride'/>
                   <HomeOptionsCard icon={lunchIcon} text='Order food' />
                </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : app_spaces.middle,
    height:"100%",
    backgroundColor:app_colors.background
  },
  headerWrapper : {
      marginVertical : app_spaces.high,
  },
  headerText : {
      fontSize : app_fontSize.high,
      fontWeight : app_fontWeight.high
  },
  optionsWrapper : {
      flexDirection:"row",justifyContent:"space-evenly",marginVertical:"auto"
  }
  
});