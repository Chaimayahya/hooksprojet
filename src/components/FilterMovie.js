import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const FilterMovie=({setSearch,setEtoil,search,etoil})=>{
    const handleReset=()=>{
        setSearch('')
        setEtoil(0)
    }

    return(
        <div>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating value={etoil} onChange={(e)=>setEtoil(e.target.value)}/>
            <Button  variant="outline-secondary"onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovie