import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import movies from '../lib/movies.json';



const Home = () => (
  <>
    <Header title="La Cartelera" />
    <MoviesList movies={movies} />
  </>
);

// const Home = () => {
//   console.log('hola mundo')
//   return (
//     <View>
//       <Text>Hola desde home</Text>
//     </View>
//   )
// }

export default Home;
