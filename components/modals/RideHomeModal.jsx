

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseModal from './BaseModal'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'

export default function RideHomeModal({isVisible = true ,title = "",description = "", closeVisible = () => {},okPress = () => {} , cancelPress = () => {} ,modalBackgroundColor=null,modalViewStyle={}}) {
  
    const CustomButton = ({onPress , label}) => {
         return <> 
                     <Pressable onPress={onPress} style={styles.button}>
                         <Text style = {styles.buttonLabel}>
                            {label}
                         </Text>
                     </Pressable>
                </>
    }
  
    return (
      <BaseModal isVisible={isVisible} closeVisible={closeVisible} modalBackgroundColor={modalBackgroundColor} modalViewStyle={modalViewStyle}>
            <View style = {styles.headerWrapper}>
                 <Text style={styles.header} numberOfLines={1}>
                     {title}
                 </Text>
            </View>
            <View style = {styles.centerWrapper}>
                  <Text style={styles.center} numberOfLines={3}>
                     {description}
                 </Text>
            </View>
            <View style = {styles.bottomWrapper}>
                 <CustomButton label={"OK"} onPress={okPress} />
                 <CustomButton label={"CANCEL"} onPress={cancelPress} /> 
            </View>
      </BaseModal>
  )
}

const styles = StyleSheet.create({
       headerWrapper : {
        height:50,justifyContent:"center",alignItems:"center",borderBottomColor:app_colors.neutral_gray,borderBottomWidth:1,
       },
       header : {
           color:app_colors.text,fontSize:app_fontSize.middle,fontWeight:app_fontWeight.small
       },
       centerWrapper : {
          flex:1, paddingVertical : app_spaces.middle,justifyContent:"center"
       },
       center : {
          fontSize:app_fontSize.small,fontWeight:app_fontWeight.small,color:app_colors.text
       },
       bottomWrapper : {
         height:50,borderTopColor:app_colors.neutral_gray,borderTopWidth:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"
       },
       button : {
           width:100 , height : 30 , justifyContent:"center",alignItems:"center",backgroundColor:app_colors.dark_gray,borderRadius:8
       },
       buttonLabel : {
           color : app_colors.background
       }

})