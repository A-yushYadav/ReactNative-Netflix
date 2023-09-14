import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

const TrendingComponent = () => {
  const API_KEY = "3b39ea5214b0999b37d4823f76fc25da";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.slice(0, 10).map((movie, id) => (
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 85,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                top: 40,
                right: 90,
                marginTop: 20,
                zIndex:5
              }}
            >
              {id + 1}
            </Text>
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

export default TrendingComponent;

const styles = StyleSheet.create({});
