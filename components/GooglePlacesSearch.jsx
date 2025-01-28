import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {API_URL, API_TOKEN} from "@env"


const GooglePlacesSearch = ({onPress}) => {
  return (
     <GooglePlacesAutocomplete 
         placeholder='Start Place'
         onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
         console.log(data, details);
      }}
      debounce={400}
      fetchDetails={true}
      minLength={2}
      query={{
        key: process.env.GOOGLE_API_KEY,
        language: 'en',
      }}
     />
  )
}

export default GooglePlacesSearch

const styles = StyleSheet.create({})
