
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => {router.push("/details")}} title='go' />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})