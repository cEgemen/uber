import { StyleSheet, Image, View, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppMap from '../../components/AppMap'
import { router, Stack } from 'expo-router'
import menuIcon from "../../assets/icons/menu.png"
import { app_colors, app_radius, app_spaces } from '../../constands/appSizes'
import RideHomeModal from '../../components/modals/RideHomeModal'

const RideLayout = () => {
  const [modalState , setModalState] = useState(false)
  const backHome = () => {
       router.push("/home")
  } 

  const okPress = () => {
      setModalState(false)
      setTimeout(() => {
        router.push("/saveLoc")
                       },500)
  }

  const cancelPress = () => {
         setModalState(false)
         setTimeout(() => {
          router.push("/details")
                          },500)
  }
  
  return (
<>
  <View style={styles.wrapper}>
      <RideHomeModal isVisible={modalState} closeVisible={() => {setModalState(false)}} title='INFO' description='Do you want to add to favorites ? ' cancelPress={cancelPress} okPress={okPress} /> 
       <AppMap onDirectionsCallback={() => {setModalState(true)}} />
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
              <Stack.Screen 
                  name='saveLoc'
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
         height:"40%"
       },
       wrapper22 : {
         height:"60%"
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