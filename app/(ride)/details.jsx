import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { app_colors, app_fontSize, app_fontWeight, app_spaces } from '../../constands/appSizes'
import { useSelector } from 'react-redux'
import UberSelectButton from '../../components/buttons/UberSelectButton'
import car1 from "../../assets/images/car1.png"
import car2 from "../../assets/images/car2.png"
import car3 from "../../assets/images/car3.png"

const Details = () => {
  const {locationData} = useSelector(state => state.loc)
  const ubers = {
  uberX: {type:"UberX", baseFare: 5, costPerKm: 2, costPerMin: 0.5 },
  uberXL: {type:"UberXL", baseFare: 8, costPerKm: 2.5, costPerMin: 0.6 },
  uberBlack: {type:"UberBlack", baseFare: 15, costPerKm: 3, costPerMin: 1 }}

  const [uberState , setUberState] = useState({selectIndex : 0})

  const calCost = (baseFare,costPerKm,costPerMin) => {
       return (baseFare + costPerKm * +locationData.distance + costPerMin * +locationData.duration).toFixed(2)
  }

  const onPress = (index) => {
      setUberState(oldState => {
          return {selectIndex:index}
      })
  }

  return (
    <View style={styles.wrapper}>
       <View style = {styles.headerWrapper}>
         <Text style={styles.headerBottom}>Uber Cost : 💵 </Text>
          <View style={styles.headerBottomWrapper}>
             <Text style={styles.headerBottom}>⌛ {locationData.duration} dk</Text>
             <Text style={styles.headerBottom}>🛤️ {locationData.distance} km</Text>
          </View>
       </View>
       <View style={styles.buttonsWrapper}>
           <UberSelectButton uberType={ubers.uberX.type} cost={calCost(ubers.uberX.baseFare,ubers.uberX.costPerKm,ubers.uberX.costPerMin)}  icon={car1} isSelect={0 === uberState.selectIndex} onPress={() => {onPress(0)}} />
           <UberSelectButton uberType={ubers.uberXL.type} cost={calCost(ubers.uberXL.baseFare,ubers.uberXL.costPerKm,ubers.uberXL.costPerMin)} icon={car2} isSelect={1 === uberState.selectIndex} onPress={() => {onPress(1)}}/>
           <UberSelectButton uberType={ubers.uberBlack.type} cost={calCost(ubers.uberBlack.baseFare,ubers.uberBlack.costPerKm,ubers.uberBlack.costPerMin)} icon={car3} isSelect={2 === uberState.selectIndex} onPress={() => {onPress(2)}}/>
       </View>
       <View>

       </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    wrapper : {
        flex:1,backgroundColor:app_colors.background,padding:app_spaces.small
    },
    headerWrapper : {
      flexDirection:"row", alignItems:"center",justifyContent:"space-around"
    },
    headerTop : {
        fontSize:app_fontSize.middle,fontWeight:app_fontWeight.middle
    },
    headerBottomWrapper : {
        flexDirection:"column",gap:app_spaces.middle
    },
    headerBottom : {
        fontSize:app_fontSize.small,fontWeight:app_fontWeight.middle,alignItems:"center",padding:app_spaces.small,backgroundColor:app_colors.light_gray,borderRadius:8,elevation:4
    },
    buttonsWrapper : {
       marginVertical:app_spaces.high,gap:app_spaces.high
    }
})