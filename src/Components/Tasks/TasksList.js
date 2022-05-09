import {
  Typography, 
  Stack,
  Box,
} from "@mui/material";
import getTasks from "../../GraphQL/Queries/getTasks";
import { useQuery } from "@apollo/client";
import TaskCard from "./TaskCard";

export default function TasksList({ status, title }) {
  const {loading, data } = useQuery(getTasks, {
    variables: {
      status,
    },
  });

  if (loading) return null;

  return (
    <Box>
      <Box className='mb-4'>
        <Typography>
          {title} ({data.tasks.length})
        </Typography>
      </Box>
      <Stack spacing={2} className='overflow-scroll'>
        {
          data.tasks.map((task) => <TaskCard task={task} key={task.id} />)
        }
      </Stack>
    </Box>
  );
}
