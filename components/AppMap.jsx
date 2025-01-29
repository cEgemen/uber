
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';

const AppMap = () => {

  const {startLocation} = useSelector(state => state.loc)  

  return (
        <>
            <MapView 
               style={styles.map}
               initialRegion={{
                               latitude : startLocation.lat , 
                               longitude : startLocation.lon,
                               latitudeDelta: 0.1,
                               longitudeDelta: 0.1
                              }}           
            >
               <Marker
                   coordinate={{latitude:startLocation.lat,longitude:startLocation.lon}}
                   title={startLocation.title}
                   description={startLocation.description}
               />
            </MapView>
        </>       
  )
}

export default AppMap

const styles = StyleSheet.create({
     map : {
         flex: 1
     }
})