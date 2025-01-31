
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import GooglePlacesSearch from '../../components/GooglePlacesSearch'
import { useDispatch } from 'react-redux'
import { setEndLocation } from '../../managment/slices/locationSlice'

const Home = () => {
  const dispatch = useDispatch()
  const searchPress = (data,details) => {
         const description = data.description;
         const title = "Destination";
         const lat = details.geometry.location.lat
         const lon = details.geometry.location.lng
         dispatch(setEndLocation({description,title,lat,lon}))
  }

  return (
    <View style={styles.container}>

        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Hello UBER User </Text>
        </View> 
       <View style={styles.searchWrapper}>
         <GooglePlacesSearch placeHolder='Where To ?' onPress={searchPress} />
       </View>
       

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   
     container : {
        flex:1,alignItems:"center",paddingHorizontal:app_spaces.small,backgroundColor:app_colors.background
     },
     headerWrapper : {
      width:"100%",alignItems:"center",borderBottomWidth:1,borderBottomColor:app_colors.dark_gray,paddingVertical:app_spaces.small,marginBottom:app_spaces.middle
     },
     header : {
        fontSize:app_fontSize.middle,fontWeight:app_fontWeight.middle,
     },
     searchWrapper : {
          width:"100%"
     }
   
})