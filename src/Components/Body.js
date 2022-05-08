import { InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function Body() {
  return (
    <div className='w-3/4'>
      <OutlinedInput placeholder='Search' startAdornment={
        <InputAdornment position='start'>
          <Search />
        </InputAdornment>
      } className='w-full' />
    </div>
  );
}
