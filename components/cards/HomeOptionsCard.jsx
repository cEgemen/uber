
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import placeHolderIcon from "../../assets/icons/warning.png"
import rightArrowIcon from "../../assets/icons/right_arrow.png"
import { app_colors, app_fontSize, app_fontWeight, app_radius } from '../../constands/appSizes'

const HomeOptionsCard = ({text="",icon=null,onPress}) => {
  return (
    <View style={styles.wrapper}>
        <Image source={icon !=  null ?  icon  : placeHolderIcon} style={styles.topIcon} />
        <Text style={styles.text} >{text}</Text> 
        <View style={styles.bottomIconWrapper}>
         <Pressable onPress={onPress}>
          <Image source={rightArrowIcon} style={styles.bottomIcon}/>
         </Pressable>
        </View>
    </View>
  )
}

export default HomeOptionsCard

const styles = StyleSheet.create({
     wrapper : {
         height:180,width:100,backgroundColor:app_colors.neutral_gray,
         justifyContent:"space-around",alignItems:"center",borderRadius:app_radius.small,
         elevation:5
     },
     topIcon : {
        width:60,height:60,resizeMode:"contain",tintColor:app_colors.background
     },
     text : {
          fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle
     },
     bottomIconWrapper : {
          borderRadius:app_radius.circle(30),backgroundColor:app_colors.dark_gray,
     },
     bottomIcon : {
        tintColor:app_colors.background,
        width:30,height:30,resizeMode:"contain" 
     }

})