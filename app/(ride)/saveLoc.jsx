import { Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import { useDispatch, useSelector } from 'react-redux'
import {saveFavLoc} from "../../managment/slices/favLocSlice"
import { router } from 'expo-router'

const SaveLoc = () => {
  
  const CustomButtom = ({label,onPress}) => {
       return <>
                    <Pressable style={styles.button} onPress={onPress}> 
                         <Text>
                             {label}
                         </Text>
                    </Pressable>
              </>
  }
  const dispatch = useDispatch()
  const {startLocation,endLocation} = useSelector(state => state.loc)
  const [titleState , setTitleState ] = useState({title : ""})

  const onSave = () => {
      if(titleState === "")
      {
         ToastAndroid.showWithGravity("Title not must empty",ToastAndroid.LONG,ToastAndroid.BOTTOM)
      }
      else {
          dispatch(saveFavLoc({title : titleState.title,startLoc:{lat:startLocation.lat,lon:startLocation.lon,description:startLocation.description},endLoc:{lat:endLocation.lat,lon:endLocation.lon,description:endLocation.description}}))
          router.replace("/details")
      }
  }

  return (
    <View style = {styles.container}>
        <View style = {styles.headerWrapper}>
              <Text style = {styles.header} numberOfLines={1}>Save Search</Text>
        </View>
        <View style={styles.centerWrapper}>
         <View style = {styles.inputWrapper}>
              <Text style = {styles.label}>Title</Text>
              <TextInput placeholder='Enter Title' style={styles.input} value={titleState.title}  onChangeText={(text) => {setTitleState(oldState => {
                  return {title : text}
              })}} />
         </View>
         <View style = {styles.inputWrapper}>
              <Text style = {styles.label}>Origin Location</Text>
              <TextInput style={styles.input} value={startLocation.description} editable={false} />
         </View>
         <View style = {styles.inputWrapper}>
              <Text style = {styles.label}>Destination Location</Text>
              <TextInput style={styles.input} value={endLocation.description} editable = {false} />
         </View>
        </View>
        <View style={styles.buttonWrapper}>
              <CustomButtom  label={"SAVE"} onPress={onSave} />
        </View>
    </View>
  )
}

export default SaveLoc

const styles = StyleSheet.create({
      container : {
          flex:1,backgroundColor:app_colors.background,padding:app_spaces.small
      },
      headerWrapper : {
          paddingVertical : app_spaces.small,alignItems:"center",borderBottomColor:app_colors.light_gray,borderBottomWidth:1
      },
      header : {
          fontSize : app_fontSize.middle,fontWeight:app_fontWeight.middle
      }, 
      centerWrapper : {
          flex:1,paddingVertical:app_spaces.middle,justifyContent:"center"
      },
      inputWrapper : {
          marginBottom:app_spaces.middle,rowGap:app_spaces.small
      } , 
      label : {
         fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle
      },
      input : {
            backgroundColor:app_colors.neutral_gray,borderRadius:8
      },
      buttonWrapper : {
            height:50,alignItems:"center",justifyContent:"center",borderTopColor:app_colors.light_gray,borderTopWidth:1
      },
      button : {
           width:"50%" , height:40 , backgroundColor:app_colors.neutral_gray  , justifyContent:"center",alignItems:"center",borderRadius:8
      }
})