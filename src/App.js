import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
        <Nav />

        <Banner />
        
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fechtActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fechtComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fechtHorrorMovies} />
        <Row title="Documentaries" fetchUrl={requests.fechtDocumentaries} />
        
    </div>
  );
}

export default App;
