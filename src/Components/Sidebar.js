import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { DashboardOutlined, List as ListIcon } from '@mui/icons-material';
import logo from '../Assets/logo.svg';

export default function Sidebar() {
  return (
    <Box className='w-1/5 h-full'>
      <Paper className='h-full flex flex-col items-center py-4 rounded-xl'>
        <img src={logo} alt='logo' className='w-12 mb-6' />
        <Box className='w-full'>
        <List>
          <ListItem selected>
            <ListItemIcon>
              <DashboardOutlined />
            </ListItemIcon>
            <ListItemText>
              Dashboard
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>
              My Tasks
            </ListItemText>
          </ListItem>
        </List>
        </Box>
      </Paper>
    </Box>
  );
}
