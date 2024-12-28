import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBox=()=>{
  return (
    <div className='headerSearch ml-3 mr-3'>
              <input type='text' placeholder='search for products...'/>
              <Button> <SearchIcon /></Button>
            </div>
  )
}

export default SearchBox;