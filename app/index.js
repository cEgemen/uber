import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../constands/appSizes';
import GooglePlacesSearch from '../components/GooglePlacesSearch';

export default function Index() {
  return (
    <SafeAreaView >
        <View style={styles.container}>
                <View style = {styles.headerWrapper}>
                       <Text style={styles.headerText}>UBER</Text>
                </View>
                <View>
                       <GooglePlacesSearch />
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
      borderColor:"red",
      borderBottomWidth:2
  },
  headerText : {
      fontSize : app_fontSize.high,
      fontWeight : app_fontWeight.high
  },
  searchBarWrapper : {

  },
  optionsWrapper : {

  }
  
});