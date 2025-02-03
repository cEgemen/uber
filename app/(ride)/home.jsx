
import {FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import GooglePlacesSearch from '../../components/GooglePlacesSearch'
import { useDispatch, useSelector } from 'react-redux'
import { setEndLocation } from '../../managment/slices/locationSlice'
import RideHomeOptionCard from '../../components/buttons/RideHomeOptionButton'
import transportIcon from "../../assets/icons/transport.png"
import lunchIcon from "../../assets/icons/lunch.png"
import FavLocCard from '../../components/cards/FavLocCard'
import { Route } from 'expo-router/build/Route'
import { router } from 'expo-router'


const Home = () => {
  const dispatch = useDispatch()
  const {favList} = useSelector(state => state.favLoc)
  const searchPress = (data,details) => {
         const description = data.description;
         const title = "Destination";
         const lat = details.geometry.location.lat
         const lon = details.geometry.location.lng
         dispatch(setEndLocation({description,title,lat,lon}))
  }
  
  const onPress = () => {
      router.push("/details")
  }

  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Hello , Dear User </Text>
        </View> 
        <View style={styles.searchWrapper}>
         <GooglePlacesSearch placeHolder='Where To ?' onPress={searchPress}  />
        </View>
        <FlatList 
            data={favList}
            keyExtractor={((item,index) => index)}
            renderItem={({item,index}) => {
                 return <>
                            <FavLocCard item={item} />
                        </>
            }}
        />
        <View style = {styles.bottomWrapper}>
               <RideHomeOptionCard icon={transportIcon} isActive onPress={onPress} />
               <RideHomeOptionCard icon={lunchIcon} />
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   
     container : {
        flex:1,alignItems:"center",padding:app_spaces.small,backgroundColor:app_colors.background
     },
     headerWrapper : {
      width:"100%",alignItems:"center",borderBottomWidth:1,borderBottomColor:app_colors.neutral_gray,paddingBottom:app_spaces.small,marginBottom:app_spaces.middle
     },
     header : {
        fontSize:app_fontSize.middle,fontWeight:app_fontWeight.middle,
     },
     searchWrapper : {
          width:"100%"
     },
     bottomWrapper : {
       width :"100%" , height : 50 ,borderTopWidth:1,borderTopColor:app_colors.neutral_gray,
       flexDirection:"row",justifyContent : "space-around",alignItems:"center"
     }
})