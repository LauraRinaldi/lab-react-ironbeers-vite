import "./App.css";
import { Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";


function App() {

   const [beers, setBeers] = useState([])
  
   useEffect( () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          console.log("Beers:", response.data)
          setCountries(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Navbar/>
      <Routes>

      <Route path="/" element={<HomePage />}/>
      <Route path="/beers" element={<AllBeersPage beers={beers} />} />
      <Route path="/random-beer" element={<RandomBeerPage />}/>
      <Route path="/new-beer" element={<AddBeersPage />} />
      <Route path="/beers/:beersId" element={<BeerDetailsPage beers={beers}/>}/>
      
    </Routes>
    </div>
  );
}
 



export default App;
