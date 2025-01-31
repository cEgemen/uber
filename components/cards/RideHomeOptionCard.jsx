
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_radius } from '../../constands/appSizes'

export default function RideHomeOptionCard({icon , isActive = false}) {
  return (
    <View style = {[styles.wrapper,{backgroundColor: isActive ? app_colors.text : app_colors.dark_gray }]}>
        <Image style = {[styles.icon,{tintColor:isActive ? app_colors.background : app_colors.light_gray }]} source = {icon} />
    </View>
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