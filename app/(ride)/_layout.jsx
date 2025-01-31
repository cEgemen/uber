import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import AppMap from '../../components/AppMap'
import { router, Stack } from 'expo-router'
import menuIcon from "../../assets/icons/menu.png"
import { app_colors, app_radius, app_spaces } from '../../constands/appSizes'

const RideLayout = () => {
  
  const backHome = () => {
       router.push("/home")
  } 
  
  return (
   <>
    <View style={styles.wrapper}>
       <AppMap />
       <Pressable onPress={() => {
           backHome()
       }} style={styles.iconWrapper}>
        <Image  style={styles.icon} source={menuIcon}/>
       </Pressable>
        
    </View>
    <View style={styles.wrapper22}>
         <Stack>
             <Stack.Screen 
                 name='home'
                 options={{
                     headerShown:false
                 }}
              />
               <Stack.Screen 
                 name='details'
                 options={
                     {
                         headerShown : false
                     }
                 }
              />
         </Stack>
    </View>
   </> 
    
  )
}

export default RideLayout

const styles = StyleSheet.create({
       wrapper : {
         height:"50%"
       },
       wrapper22 : {
         height:"50%"
       },
       iconWrapper : {
           position : "absolute", 
           top:app_spaces.high,left : app_spaces.high,
           elevation:8,
           backgroundColor:app_colors.text,
           padding:app_spaces.middle,
           borderRadius:app_radius.circle(80)
       },
       icon : {
           width:30,height:30,
           tintColor:app_colors.background,
            
       }
})