import { List as ListIcon, GridView, Add } from '@mui/icons-material';
import { Box, Tabs, Tab, Button } from '@mui/material';

export default function DisplayModeSwitcher() {
    return (
      <Box className='flex justify-between my-4'>
        <Tabs value={1}>
          <Tab icon={<ListIcon />} aria-label='list' />
          <Tab icon={<GridView />} aria-label='grid' />
        </Tabs>
        <Button variant='contained' size='small'>
          <Add />
        </Button>
      </Box>
    );
}
