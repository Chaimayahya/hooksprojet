import './App.css';
import ListMovie from './components/ListMovie';
import NavMovie from './components/NavMovie';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDescription from './components/MovieDescription';

function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'SALAAR', description :'From the Makers of  "KGF: Chapter 1 & 2," &  the visionary director Prashanth Neel, comes a film that will push the boundaries of cinematic brilliance, presenting you the official Trailer of "Salaar", featuring the powerhouse talents of Prabhas, Prithviraj, Shruthi Haasan, Tinu Anand, Eshwari Rao, Jagapathi Babu, Sriya Reddy, Garuda Ram.Brace yourself for an extraordinary tale of rebellion filled with power-packed action and impactful music by Ravi Basrur. ',posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4AHwA4S73r6fa3Od68douWpYOvKmLprjtw&usqp=CAU",rating : 5, id : Math.random(),trailer:"//www.youtube.com/embed/efrYtSEnJFc?si=1AzFTk10tg6NX0_S"},
      {title : 'X-MEN', description :'Following the critically acclaimed global smash hit X-Men: Days of Future Past, director Bryan Singer returns with X-MEN: APOCALYPSE. Since the dawn of civilization, he was worshipped as a god. Apocalypse, the first and most powerful mutant from Marvel’s X-Men universe, amassed the powers of many other mutants, becoming immortal and invincible.',posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4ZlY8nuES7xCXQctQztRP7Og7ODppEq1dA&usqp=CAU',rating : 3, id : Math.random(),trailer:"https://www.youtube.com/embed/COvnHv42T-A?si=yf-TiD_34dQvk4M6"},
      {title : 'MATRIX', description :"Synopsis. Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus.",posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3pPNhXSLunpnDnkcZdwccHKG8INMSLAL8A&usqp=CAU',rating : 5, id : Math.random(),trailer:"https://www.youtube.com/embed/vKQi3bBA1y8?si=zfFBoJvXYcffSK5L"},
      {title : 'JUNE', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT465u5huVhjtvrS4kkr5JmKVADqZklefs7MA&usqp=CAU',rating : 2, id : Math.random(),trailer:"https://www.youtube.com/embed/PyMcI6222IY?si=oKmGE5gTO33A31j9"},
  
    ])
    const [search,setSearch] = useState('')
    const [etoil,setEtoil] = useState(0)
  return (

    <div>
    <NavMovie/>

    <Routes>

    <Route path='/' element={<Home movies={movies}/>}/>
    <Route path='/ListMovie' element={ <ListMovie movies={movies} search={search} etoil={etoil} setSearch={setSearch} setEtoil={setEtoil} setMovies={setMovies}/>}/>
    <Route path='/MovieDescription/:id' element={<MovieDescription movies={movies}/>}/>

    </Routes>

    
   
    
    </div>
    
   
    
    
  
    
    
  );
}

export default App;
