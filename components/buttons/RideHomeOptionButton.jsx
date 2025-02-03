
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_radius } from '../../constands/appSizes'
import { useSelector } from 'react-redux'

export default function RideHomeOptionCard({icon , isActive = false,onPress=() => {}}) {
  const {endLocation} = useSelector(state => state.loc)
  const isDisable = endLocation.lat === null || endLocation.lon === null
  let backgroundColor = "";
  if(isDisable)
  {
       backgroundColor = app_colors.dark_gray
  }
  else 
  {
        backgroundColor = isActive ? app_colors.text : app_colors.dark_gray
  }
  return (
    <Pressable disabled={isDisable}  style = {[styles.wrapper,{backgroundColor: backgroundColor}]} onPress={onPress}>
        <Image style = {[styles.icon,{tintColor:isActive ? app_colors.background : app_colors.light_gray }]} source = {icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
      wrapper : {
          height : 30,width : 70, justifyContent:"center",alignItems:"center" ,borderRadius : app_radius.middle
      },
      icon : {
          width:30,height:30,
          resizeMode:"cover"
      }
})