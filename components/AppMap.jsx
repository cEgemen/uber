
import { StyleSheet} from 'react-native'
import polyline from '@mapbox/polyline'
import React, { useEffect, useRef, useState } from 'react'
import MapView,{Marker,Polyline} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../config/app_secret';
import MapViewDirections from "react-native-maps-directions"


const AppMap = ({onDirectionsCallback = ({duration,distance}) => {}}) => {
  const mapRef = useRef(null)
  const {startLocation,endLocation} = useSelector(state => state.loc)  
  const [mapState , setMapState] = useState({startState : false , endState : false,directionState:false})
  /* const [routesData , setRoutesData] = useState(null) */
  
 
  useEffect(() => {
       if(((startLocation.lat !== null && startLocation.lon !== null) && (endLocation.lat === null && endLocation.lon === null)))
       {
           setTimeout(()=> {
            setTimeout(() => {
                setMapState(oldState => {
                    return {...oldState,startState:true}
                })
            },1600)
            mapRef.current.animateToRegion({
                latitude: startLocation.lat,
                longitude: startLocation.lon,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }, 1500);
           },500)
       }
       else if(((startLocation.lat !== null && startLocation.lon !== null) && (endLocation.lat !== null && endLocation.lon !== null)))
       {
        setTimeout(() => {
            setMapState(oldState => {
                return {...oldState,endState:true}
            })
        },1300)
        mapRef.current.animateToRegion({
            latitude: endLocation.lat,
            longitude: endLocation.lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }, 1200);
          setTimeout(()=> {
                  mapRef.current.fitToCoordinates(
                    [
                       {latitude:startLocation.lat,longitude:startLocation.lon},
                       {latitude:endLocation.lat,longitude:endLocation.lon}
                    ],
                    {
                       edgePadding : { top: 50, right: 50, bottom: 50, left: 50 },   
                       animated:true
                    }
                                                 )
                    setMapState(oldState => {
                          return {...oldState,directionState:true}
                    })
          },1500)
       }
  },[startLocation,endLocation])
  
 /*  useEffect(() => {
     const fetchWaysData = () => {
            fetch( `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation.lat},${startLocation.lon}&destination=${endLocation.lat},${endLocation.lon}&alternatives=true&key=${GOOGLE_API_KEY}`)
            .then(res => {
                 return res.json()
            })
            .then(data => {
                if (data.status === "OK") {
                    const decodedRoutes = data.routes.map((route) => ({
                      summary: route.summary,
                      coordinates: polyline.decode(route.overview_polyline.points).map(([lat, lng]) => ({
                        latitude: lat,
                        longitude: lng,
                      })),
                    }));
                    setRoutesData(decodedRoutes)
                }
            })
            .catch(err => console.log("error : ",err))
     } 
     if((startLocation.lat !== null && startLocation.lon !== null) && (endLocation.lat !== null && endLocation.lon !== null))
      {
           fetchWaysData()
      }
  },[startLocation,endLocation]) */

  return (
        <>
            <MapView 
               ref={mapRef}
               style={styles.map}
               initialRegion={{
                               latitude : startLocation.lat , 
                               longitude : startLocation.lon,
                               latitudeDelta: 0.1,
                               longitudeDelta: 0.1
                              }}      
            >
               {mapState.startState ? <Marker
                   coordinate={{latitude:startLocation.lat,longitude:startLocation.lon}}
                   title={startLocation.title}
                   description={startLocation.description}
               /> : null}
               {mapState.endState ? <Marker
                   coordinate={{latitude:endLocation.lat,longitude:endLocation.lon}}
                   title={endLocation.title}
                   description={endLocation.description}
               /> : null}
               {
                 mapState.directionState
                 ?
                  <MapViewDirections 
                       origin={{latitude : startLocation.lat , longitude : startLocation.lon}}
                       destination={{latitude : endLocation.lat , longitude : endLocation.lon}}
                       apikey={GOOGLE_API_KEY}
                       strokeColor="blue"
                       strokeWidth={2}
                       onReady={(args) => {
                                onDirectionsCallback({distance:args.distance,duration:args.duration})
                       }}
                  />
                 :
                   null
               }
               {
                /*
                {
                 routesData !== null ? routesData.map((route,index) => {
                  return  <Polyline
            key={index}
            coordinates={route.coordinates}
            strokeColor={index === 0 ? "blue" : index === 1 ? "red" : "green"} // Her rota farklı renkte
            strokeWidth={4}
          /> 
                 }) : null

               } 
               */
               }
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