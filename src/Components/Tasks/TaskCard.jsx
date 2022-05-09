import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Chip,
  Stack,
  CardActions,
  Avatar,
} from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import moment from 'moment';

import EstimationPoints from '../../Lib/EstimationPoints';

function TaskCard({ task }) {
  return (
    <Card key={task.id}>
      <CardHeader
        title={task.name}
        action={(
          <IconButton>
            <MoreHoriz />
          </IconButton>
        )}
      />
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">
              {`${EstimationPoints.getNumberFromName(task.pointEstimate)} Points`}
            </Typography>
            <Chip label={moment(task.dueDate).fromNow()} />
          </Stack>
          <Stack direction="row" spacing={1}>
            {
              task.tags.map((tag) => <Chip label={tag} key={tag} size="small" />)
            }
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="row">
          <Avatar src={task.assignee.avatar} sx={{ height: 32, width: 32 }} />
        </Stack>
      </CardActions>
    </Card>
  );
}

TaskCard.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    pointEstimate: PropTypes.string,
    assignee: PropTypes.exact({
      avatar: PropTypes.string,
    }),
    dueDate: PropTypes.string,
  }).isRequired,
};

export default TaskCard;
