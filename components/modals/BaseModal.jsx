
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { app_colors, app_spaces } from '../../constands/appSizes'
import closeIcon from "../../assets/icons/close.png"

export default function BaseModal({isVisible = false , closeVisible = () => {},modalBackgroundColor=null,modalViewStyle={},children}) {

  return (
    <Modal
       visible = {isVisible}
       transparent
       onRequestClose={e => closeVisible()}
     >
        <View style={[styles.modalWrapper,{backgroundColor:modalBackgroundColor!==null ? modalBackgroundColor : "rgba(0, 0, 0, 0.5)"}]}>
          <View style = {[styles.modalContainer,modalViewStyle]}>
            <Pressable style={styles.iconWrapper} onPress={closeVisible} >
             <Image style={styles.icon} source={closeIcon} />
            </Pressable>
            {children}
          </View>
           
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
     modalWrapper : {
        flex: 1,justifyContent:"center",alignItems:"center"
     },
     modalContainer : {
           position:"relative",paddingHorizontal:app_spaces.high,paddingVertical:app_spaces.small,
           width:"90%",height:200,backgroundColor:app_colors.background,borderRadius:8
     },
     iconWrapper : {
         position : "absolute",top:2,right:2
     },
     icon : {
       resizeMode:"cover",width:25,height:25,tintColor:app_colors.text
     }
})