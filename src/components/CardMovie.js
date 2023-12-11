import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
const CardMovie=({el})=>{
    return(
    <Card className='cart' style={{ width: '18rem' }}>
      <Card.Img className="image" variant="top" src={el.posterURL} />
      <Card.Body className='cart'>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
         {el.description}
        </Card.Text>

        <Rating name="read-only" value={el.rating} readOnly />
        
        
      </Card.Body>
    </Card>
    );
}

export default CardMovie



