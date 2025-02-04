
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseModal from './BaseModal'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import locationOnIcon from "../../assets/icons/locationOn.png"
import dottedWayIcon from "../../assets/icons/dottedWay.png"

const RideDetailModal = ({
    isVisible = false , closeVisible = () => {},modalBackgroundColor=null,modalViewStyle={},title="Info",locationData={startDesc:null,endDesc:null},uberData={cost:null,type:null,duration:null,distance:null,},confirmPress = () => {}}) => {

  const CustomButton = ({onPress , label}) => {
      return <>
                <Pressable onPress={onPress} style={styles.button}>
                     <Text style={styles.buttonLabel}>
                        {label}
                     </Text>
                </Pressable>
            </>
  }  

  return (
     <BaseModal isVisible={isVisible} closeVisible={closeVisible} modalViewStyle={modalViewStyle} modalBackgroundColor={modalBackgroundColor} >
        <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={1}>
                    {title}
            </Text>
        </View>
        <View style={styles.datasWrapper}>
          <View style={styles.dataContainer}>
             <Text style={styles.dataText}>⌛ {uberData.duration} dk </Text>
             <Text style={styles.dataText}>🛞 {uberData.distance} km </Text>
          </View>
          <View style={styles.dataContainer}>
             <Text style={styles.dataText}>🚗 {uberData.type}</Text>
             <Text style={styles.dataText}>💵 {uberData.cost} $ </Text>
          </View>
       </View>
         <View style = {styles.detailsWrapper}>
                      <View style={styles.detailsContainer}>
                        <Image source={locationOnIcon} style={styles.locIcon} />
                        <Text numberOfLines={1} style={styles.detailText}>{locationData.startDesc}</Text>
                      </View>
                      <View style={styles.wayIconWrapper}>
                         <Image style={styles.wayIcon} source={dottedWayIcon} />  
                      </View>
                      <View  style={styles.detailsContainer}>
                        <Image source={locationOnIcon} style={styles.locIcon} />
                        <Text numberOfLines={1} style={styles.detailText}>{locationData.endDesc}</Text>
                      </View>
         </View>
         <View style={styles.buttonsWrapper}>
                  <CustomButton label={"Confirm"} onPress={confirmPress}  />
                  <CustomButton label={"Back"}  onPress={closeVisible} />
         </View>
     </BaseModal>
  )
}

export default RideDetailModal

const styles = StyleSheet.create({
     title : {
       textAlign:"center",  fontSize:app_fontSize.middle,fontWeight:app_fontWeight.middle
     },
     titleWrapper : {
         borderBottomColor:app_colors.neutral_gray,borderBottomWidth:1,marginBottom:app_spaces.small
     },
     datasWrapper : {
       flexDirection : "column",
    },
    dataContainer : {
       flexDirection:"row",alignItems:"center"
    },
    dataText : {
     flex:1, fontSize : app_fontSize.small,fontWeight:app_fontWeight.small,padding:app_spaces.small,borderBottomColor:app_colors.neutral_gray,borderBottomWidth:1
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
         buttonsWrapper : {
             width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center",paddingVertical:app_spaces.middle,borderTopColor:app_colors.neutral_gray,borderTopWidth:1
         },
         button : {
             width:100,height:30,backgroundColor:app_colors.neutral_gray,borderRadius:8,justifyContent:"center",alignItems:"center"
         }
})