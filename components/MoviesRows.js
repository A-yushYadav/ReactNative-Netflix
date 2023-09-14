import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import movieUrl from '../data/movieUrl'
import MovieRow from './MovieRow'

const MoviesRows = () => {
    const data = movieUrl;
  return (
    <View>
      {data.map((movie)=>(
        <MovieRow title={movie.name} url={movie.url}/>
      ))}
    </View>
  )
}

export default MoviesRows

const styles = StyleSheet.create({})