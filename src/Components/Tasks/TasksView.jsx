import React from 'react';
import {
  Grid,
} from '@mui/material';
import TasksList from './TasksList';

export default function TasksView() {
  return (
    <Grid container spacing={2} paddingBottom={4}>
      <Grid item xs={4}>
        <TasksList status="BACKLOG" title="Backlog" />
      </Grid>
      <Grid item xs={4}>
        <TasksList status="TODO" title="Todo" />
      </Grid>
      <Grid item xs={4}>
        <TasksList status="IN_PROGRESS" title="In Progress" />
      </Grid>
    </Grid>
  );
}
