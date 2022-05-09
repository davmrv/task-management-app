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
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

export default function TaskCard({task}) {
  return (
    <Card key={task.id}>
      <CardHeader
        title={task.name}
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
      />
      <CardContent>
        <Stack spacing={1}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='body2'>
              4 Points
            </Typography>
            <Chip label='Today' />
          </Stack>
          <Stack direction='row' spacing={1}>
            {
              task.tags.map((tag) => <Chip label={tag} key={tag} size='small' />)
            }
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction='row'>
          <Avatar src='https://i.pravatar.cc/300' sx={{ height: 32, width: 32 }} />
        </Stack>
      </CardActions>
    </Card>
  );
}
