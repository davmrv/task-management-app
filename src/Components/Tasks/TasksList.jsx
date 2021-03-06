import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Stack,
  Box,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import getTasks from '../../GraphQL/Queries/getTasks';
import TaskCard from './TaskCard';

function TasksList({ status, title }) {
  const { loading, data } = useQuery(getTasks, {
    variables: {
      status,
    },
  });

  if (loading) return null;

  return (
    <Box>
      <Box className="mb-4">
        <Typography>
          {title}
          {' '}
          (
          {data.tasks.length}
          )
        </Typography>
      </Box>
      <Stack spacing={2} className="overflow-scroll">
        {
          data.tasks.map((task) => <TaskCard task={task} key={task.id} />)
        }
      </Stack>
    </Box>
  );
}

TasksList.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TasksList;
