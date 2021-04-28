import React from 'react';

const API_KEY = "e6645318cb26f091f368f3606786246e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${ API_KEY }&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&withlanguage=en-US` ,
    fechtActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fechtComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fechtHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fechtRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fechtDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;