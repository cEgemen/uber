import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import { useSelector } from 'react-redux'
import UberSelectButton from '../../components/buttons/UberSelectButton'
import car1 from "../../assets/images/car1.png"
import car2 from "../../assets/images/car2.png"
import car3 from "../../assets/images/car3.png"
import RideDetailModal from '../../components/modals/RideDetailModal'

const Details = () => {
  const [modalState , setModalState] = useState(false)
  const {locationData,endLocation,startLocation} = useSelector(state => state.loc)
  const ubers = [
  {type:"UberX", baseFare: 5, costPerKm: 2, costPerMin: 0.5 },
  {type:"UberXL", baseFare: 8, costPerKm: 2.5, costPerMin: 0.6 },
  {type:"UberBlack", baseFare: 15, costPerKm: 3, costPerMin: 1 }
                ]

  const [uberState , setUberState] = useState({selectIndex : 0})

  const calCost = (baseFare,costPerKm,costPerMin) => {
       return (baseFare + costPerKm * +locationData.distance + costPerMin * +locationData.duration).toFixed(2)
  }

  const {baseFare , costPerKm,costPerMin,type} = ubers[uberState.selectIndex] 

  const onPress = (index) => {
      setUberState(oldState => {
          return {selectIndex:index}
      })
  }

  const selectOnPress = () => {
      setModalState(true)
  }
 
  const modalOnPress = () => {
      setModalState(false)
  }

  return (
    <View style={styles.wrapper}>
       <View style = {styles.headerWrapper}>
             <Text style={styles.header}>⌛ {locationData.duration} dk</Text>
             <Text style={styles.header}>🛤️ {locationData.distance} km</Text>
       </View>
     
       <View style={styles.buttonsWrapper}>
           <UberSelectButton uberType={ubers[0].type} cost={calCost(ubers[0].baseFare,ubers[0].costPerKm,ubers[0].costPerMin)}  icon={car1} isSelect={0 === uberState.selectIndex} onPress={() => {onPress(0)}} />
           <UberSelectButton uberType={ubers[1].type} cost={calCost(ubers[1].baseFare,ubers[1].costPerKm,ubers[1].costPerMin)} icon={car2} isSelect={1 === uberState.selectIndex} onPress={() => {onPress(1)}}/>
           <UberSelectButton uberType={ubers[2].type} cost={calCost(ubers[2].baseFare,ubers[2].costPerKm,ubers[2].costPerMin)} icon={car3} isSelect={2 === uberState.selectIndex} onPress={() => {onPress(2)}}/>
       </View>
       <Pressable style={styles.buttonWrapper} onPress={selectOnPress}>
          <Text style={styles.buttonLabel}>
              Select {type}
          </Text>
       </Pressable>
       <RideDetailModal 
       uberData={{type:type,cost:calCost(baseFare,costPerKm,costPerMin),duration:locationData.duration,distance:locationData.distance}} 
       locationData={{startDesc:startLocation.description,endDesc:endLocation.description}} 
       isVisible={modalState} 
       closeVisible={() => { setModalState(false)}} 
       modalViewStyle={{height : "auto"}} 
       confirmPress={modalOnPress}
       />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    wrapper : {
        flex:1,backgroundColor:app_colors.background,paddingVertical:app_spaces.high,paddingHorizontal:app_spaces.small
        ,alignItems:"center"
    },
    headerWrapper : {
     width:"100%",  flexDirection:"row", alignItems:"center",justifyContent:"space-around"
    },
    header : {
        fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle,alignItems:"center",padding:app_spaces.small,backgroundColor:app_colors.light_gray,borderRadius:8,elevation:4
    },
    
    buttonsWrapper : {
       marginVertical:app_spaces.high,gap:app_spaces.high
    },
    buttonWrapper : {
       marginVertical:"auto",width:250,height:40,backgroundColor:app_colors.neutral_gray,alignItems:"center",justifyContent:"center",borderRadius:8,elevation:4
    },
    buttonLabel : {
        fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle
    }
})