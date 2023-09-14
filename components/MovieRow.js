import { Pressable, ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect, useState } from "react";

const MovieRow = ({ title, url }) => {
  const API_KEY = "3b39ea5214b0999b37d4823f76fc25da";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  return (
    <View>
      <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie, id) => (
          <Pressable key={id}>
            <Image
              style={{
                width: 105,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
                margin: 10,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;

const styles = StyleSheet.create({});
