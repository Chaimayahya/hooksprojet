import Carousel from 'react-bootstrap/Carousel';

const Home=({movies})=>{
    return(
 <div className='carC'>
    <br/>
    <br/>

    <Carousel data-bs-theme="dark" style={{width:'90%', height:'90%'}}>
        {
         movies.map((el,i,t)=>
            <Carousel.Item style={{width:'90%', height:'90%', marginLeft:'30 px',marginRight:'50px'}}>
                <img style={{width:'700px', height:'650px'}} className="d-block w-100" src={el.posterURL} alt="First slide"/>
            

            </Carousel.Item>
            )
        }
        
   


    </Carousel>
    </div>
    )
}

export default Home