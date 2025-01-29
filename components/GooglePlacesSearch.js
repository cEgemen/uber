import { StyleSheet} from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { app_colors,app_radius } from '../constands/appSizes';
import { GOOGLE_API_KEY } from '../config/app_secret';

const GooglePlacesSearch = ({placeHolder="Start Location ?",onPress=(data,details=null)=>{}}) => {
   
  return (
        <GooglePlacesAutocomplete 
         placeholder={placeHolder}
         onPress={(data, details = null) => {
           onPress(data,details)
      }}
      styles={styles}
      fetchDetails={true}
      debounce={400}
      minLength={2}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
     />
   
  )
}

export default GooglePlacesSearch

const styles = StyleSheet.create({
    textInput : {
      backgroundColor:app_colors.light_gray,
      color:app_colors.text,
      borderRadius:app_radius.middle,
      elevation:4
   },
   container : {
     flex:0
   }
})
