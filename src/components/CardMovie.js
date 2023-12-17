import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardMovie=({el})=>{

  const [showMore, setShowMore] = useState(false);
    return(
    <Card className='cart' style={{ width: '18rem' }}>
      <Card.Img className="image" variant="top" src={el.posterURL} />
      <Card.Body className='cart'>
        <Card.Title as={Link} to={`/MovieDescription/${el.id}`}>{el.title}</Card.Title>
        <Card.Text>
        {showMore ? el.description : `${el.description.substring(0, 80)}`}
                  <a className={showMore ? 'red' : 'green'}  onClick={()=>setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</a> 
        </Card.Text>

        <Rating name="read-only" value={el.rating} readOnly />
        
        
      </Card.Body>
    </Card>
    );
}

export default CardMovie



