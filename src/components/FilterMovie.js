import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const FilterMovie=({setSearch})=>{
    return(
        <div className ="filtre">
            <input onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating/>
            <Button>Search</Button>
        </div>
    )
}

export default FilterMovie