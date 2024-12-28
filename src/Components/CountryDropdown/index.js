import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CountryDropdown=()=>{
  return(
    <Button className='countryDrop'>
              <div className='info d-flex flex-column'>
                <span className='lable'>Your Location</span>
                <span className='name'>India</span>
              </div>

              <span className='ml-auto'><ExpandMoreIcon /></span>
            </Button>
  )
}

export default CountryDropdown;