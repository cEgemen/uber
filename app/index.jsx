import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../constands/appSizes';
import GooglePlacesSearch from '../components/GooglePlacesSearch';
import HomeOptionsCard from '../components/cards/HomeOptionsCard';
import trasportIcon from "../assets/icons/transport.png"
import lunchIcon from "../assets/icons/lunch.png"
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setStartLoction } from '../managment/slices/locationSlice';

export default function Index() {
  const {startLocation} = useSelector(state => state.loc)    
  const dispatch = useDispatch()
  const isDisable =  startLocation.lat === null || startLocation.lon === null; 
  const searchOnPress = (data,details) => {
       const lat = details.geometry.location.lat
       const lon = details.geometry.location.lng
       const title = "Origin"
       const description = data.description
       dispatch(setStartLoction({lat,lon,title,description}))
  }
  
  const onPress = (path) => {
      router.push(path)
  }

  return (
    <SafeAreaView >
        <View style={styles.container}>
                <View style = {styles.headerWrapper}>
                       <Text style={styles.headerText}>UBER</Text>
                </View>
                 <GooglePlacesSearch onPress={searchOnPress} /> 
                <View style={styles.optionsWrapper}>
                   <HomeOptionsCard icon={trasportIcon} text='Get a ride' onPress={() => {onPress("/home")}} disabled={ isDisable} />
                   <HomeOptionsCard icon={lunchIcon} text='Order food'  onPress={() => {onPress("/")}} disabled={isDisable} />
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
      height:250,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",
  }
  
});