import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps"
import { useSelector } from 'react-redux'
import { router, useLocalSearchParams } from 'expo-router'
import MapViewDirections from "react-native-maps-directions"
import { GOOGLE_API_KEY } from '../config/app_secret'
import { app_colors, app_fontSize, app_fontWeight, app_radius, app_spaces } from '../constands/appSizes'
import menuIcon from "../assets/icons/menu.png"

const ShowFavLocToMap = () => {
  const {favList} = useSelector(state => state.favLoc)
  const [mapState , setMapState] = useState({startState:false,endState:false,direction:false})
  const {id,backPath} = useLocalSearchParams()
  const {title,startLocation,endLocation} = favList[id]
 
  const mapRef = useRef(null)
  
  const onPress = () => {
      router.replace(backPath)
  }

  useEffect(() => {
          setTimeout(() => {           
           mapRef.current.animateToRegion({
            latitude: startLocation.lat,
            longitude: startLocation.lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
         },1000)
         setTimeout(() => {
          setMapState(oldState => {
              return {...oldState , startState : true}
          })
          setTimeout(() => {
              mapRef.current.animateToRegion({
                  latitude: endLocation.lat,
                  longitude: endLocation.lon,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,    
                },1000) 
                setTimeout(() => {
                     setMapState(oldState => {
                          return {...oldState,endState:true}
                     })
                     setTimeout(() => {
                        mapRef.current.fitToCoordinates(
                            [
                               {latitude:startLocation.lat,longitude:startLocation.lon},
                               {latitude:endLocation.lat,longitude:endLocation.lon}
                            ],
                            {
                               edgePadding : { top: 50, right: 50, bottom: 50, left: 50 },   
                               animated:true
                            }
                                                         )
                            setMapState(oldState => {
                                 return {...oldState,direction:true}
                            }) 
                     },1000)
                },1200)
          },500)
       },1200)
   },500)
  },[])

  return (
     <>
       <View style = {styles.headerWrapper}>
         <Text style= {styles.header} numberOfLines={1}>
         📍{title}
         </Text>
       </View>
       <Pressable onPress={onPress} style={styles.iconWrapper}>
         <Image style={styles.icon} source={menuIcon} />
       </Pressable>
       <MapView
       ref={mapRef}
       style={styles.map}
       initialRegion={{
             latitude : startLocation.lat,
             longitude: startLocation.lon,
             latitudeDelta : 0.05,
             longitudeDelta: 0.05
       }} 
     >
      {mapState.startState ? <Marker 
                      coordinate={{
                         latitude:startLocation.lat,
                         longitude:startLocation.lon
                      }}
                      title='Origin'
                      description={startLocation.description}
         /> : null}
      {mapState.endState ? <Marker  
                     coordinate={{
                         latitude:endLocation.lat,
                         longitude:endLocation.lon
                      }}
                      title='Destination'
                      description={endLocation.description}
      /> : null}
      {mapState.direction ? <MapViewDirections 
            strokeWidth={2}
            apikey={GOOGLE_API_KEY}
            origin={{
                latitude : startLocation.lat,
                longitude: startLocation.lon
            }}
            destination={{
                 latitude : endLocation.lat,
                 longitude : endLocation.lon
            }}
      /> : null}
     </MapView> 
     </>
     
  )
}

export default ShowFavLocToMap

const styles = StyleSheet.create({
     map : {
          flex:1
     },
     headerWrapper : {
          position:"absolute",top:app_spaces.middle,padding:app_spaces.small,zIndex:2,width:"100%",backgroundColor:app_colors.light_gray,opacity:.8,flexDirection:"row"
     },
      header : {
         fontSize:app_fontSize.middle , fontWeight: app_fontWeight.middle
     },
     iconWrapper : {
          position:"absolute", bottom:app_spaces.middle,right:app_spaces.small,zIndex:2
     },
     icon : {
         width:40,height:40,resizeMode:"cover",padding:app_spaces.middle,borderRadius:app_radius.circle(40),backgroundColor:app_colors.text
     },

    
})