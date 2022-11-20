import Row from './component/Row'
import './App.css';
import requests from './request'
import Banner from './component/Banner';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
