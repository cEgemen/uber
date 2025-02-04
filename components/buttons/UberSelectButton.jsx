
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_fontSize, app_fontWeight } from '../../constands/appSizes'

const UberSelectButton = ({uberType="",cost="",icon,isSelect,onPress}) => {
  return (
    <Pressable style={[styles.wrapper,{borderWidth:isSelect ? 2 : 0,elevation:isSelect ? 4 : 0,backgroundColor:isSelect ? app_colors.neutral_gray : app_colors.light_gray}]} onPress={onPress}>
      <Image style={styles.icon} source={icon} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{uberType}  {cost} $</Text>
      </View> 
    </Pressable>
  )
}

export default UberSelectButton

const styles = StyleSheet.create({
     wrapper : {
          width:"100%",flexDirection:"row",justifyContent:"start",alignItems:"center",backgroundColor:app_colors.neutral_gray,borderColor:app_colors.text,borderRadius:8
     },
     icon : {
       width:90,height:60,resizeMode:"contain"
     },
     textWrapper : {
       flex:1,alignItems:"center"
     },
     text : {
        fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle
     }
})