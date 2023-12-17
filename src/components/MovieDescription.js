import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
const MovieDescription=({movies})=>{

    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()


    return(
        <div className="but">
         
           <div className="moviedes">

            <h3>{found.title}</h3>
            <div className="description">
            <img src={found.posterURL} alt="Not Found" style={{width:'400px', height:'400px'}} />
            <p>{found.description}</p>
            <br/>
            </div>
            <div className="frame">
            <iframe width="500px" height="400px" src={found.trailer} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <br/>
          
        </div>
        <br/>
        <Button variant="outline-secondary"  onClick={navigate('/')}>Retour</Button>
        </div>   
    )
}

export default MovieDescription