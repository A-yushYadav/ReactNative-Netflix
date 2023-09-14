import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TrendingComponent from '../components/TrendingComponent'
import MoviesRows from '../components/MoviesRows'
const HomeScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Header/>
      <TrendingComponent/>
      <MoviesRows/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})