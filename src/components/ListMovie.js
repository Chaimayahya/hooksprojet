import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"
import AddMovie from "./AddMovie"

    const ListMovie=({movies,search,etoil, setSearch,setEtoil,setMovies})=>{

         var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= etoil)
                return(
                    <div >
                        <div className="searchadd">
                            <FilterMovie setSearch={setSearch} setEtoil={setEtoil} search={search} etoil={etoil}/>
                            <AddMovie setMovies={setMovies} movies={movies}/>
                        </div>
                        
                        <div className="cards">
                        {
                            
                            
                           x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                        }
                        </div>
                    </div>
                )
            }
            
            export default ListMovie