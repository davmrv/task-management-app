import React from 'react';
import {
  Box, List, ListItemButton, ListItemIcon, ListItemText, Paper,
} from '@mui/material';
import { DashboardOutlined, List as ListIcon } from '@mui/icons-material';
import logo from '../Assets/logo.svg';

export default function Sidebar() {
  return (
    <Box className="w-1/4">
      <Paper className="h-full py-4 rounded-xl">
        <img src={logo} alt="logo" className="w-12 m-auto mb-6" />
        <Box className="w-full">
          <List className="uppercase">
            <ListItemButton selected>
              <ListItemIcon>
                <DashboardOutlined />
              </ListItemIcon>
              <ListItemText>
                Dashboard
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText>
                My Tasks
              </ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
