
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import locationOnIcon from "../../assets/icons/locationOn.png"
import rightArrowIcon from "../../assets/icons/right_arrow.png"
import dottedWayIcon from "../../assets/icons/dottedWay.png"
import { app_colors, app_fontSize, app_fontWeight, app_radius, app_spaces } from '../../constands/appSizes'

const FavLocCard = ({item}) => {
  return (
    <Pressable style={styles.wrapper} onPress={() => {}}>
            <View style={styles.headerWrapper}>
               <Text style={styles.header} numberOfLines={1}>
              📕 {item.title}
               </Text>
            </View>
            <View style = {styles.detailsWrapper}>
              <View style={styles.detailsContainer}>
                <Image source={locationOnIcon} style={styles.locIcon} />
                <Text numberOfLines={1} style={styles.detailText}>{item.startLocation.description}</Text>
              </View>
              <View style={styles.wayIconWrapper}>
                 <Image style={styles.wayIcon} source={dottedWayIcon} />  
                 <Image style={styles.rightIcon} source={rightArrowIcon} />
              </View>
              <View  style={styles.detailsContainer}>
                <Image source={locationOnIcon} style={styles.locIcon} />
                <Text numberOfLines={1} style={styles.detailText}>{item.endLocation.description}</Text>
              </View>
            </View>
    </Pressable>
  )
}

export default FavLocCard

const styles = StyleSheet.create({
    wrapper : {
       width:"100%",backgroundColor:app_colors.light_gray,padding:app_spaces.middle,borderRadius:8,borderColor:app_colors.text,borderWidth:1
    },
    headerWrapper : {
        paddingLeft:app_spaces.small,marginBottom:app_spaces.small
    },
    header : {
        fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle
    },
    detailsWrapper : {
         marginTop : app_spaces.small , marginBottom: app_spaces.middle
    },
    detailsContainer:{
       flexDirection:"row",alignItems:"center",columnGap:app_spaces.middle
    }, 
    detailText : {
        
    },
    wayIconWrapper : {
        paddingLeft:app_spaces.middle,paddingBottom:3
    },
    wayIcon : {
       width:20,height:50,resizeMode:"contain"
    },
    locIcon : {
       width:25,height:25,resizeMode:"cover",tintColor:app_colors.text
    },
    rightIcon : {
        width:40,height:40,resizeMode:"cover",position:"absolute",right:0,tintColor:app_colors.text,backgroundColor:app_colors.neutral_gray,borderRadius:app_radius.circle(40)
    }
})