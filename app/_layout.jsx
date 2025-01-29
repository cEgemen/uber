
import { StyleSheet} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import {store} from '../managment/stores/store'


export default function RootLayout() {
  return (
   <Provider store={store}>
     <Stack screenOptions={{
         animation:"slide_from_right"
    }}>
       <Stack.Screen 
              name='index' 
              options={{
              headerShown:false
                      }}
       />
       <Stack.Screen 
          name='(ride)'
          options={
             {
                headerShown:false
             }
          }
       />
     </Stack>
   </Provider> 
   
  )
}

const styles = StyleSheet.create({})