// TOOD: normally I'd wrap this nto a centralised component
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

// services
import service from '../../../services/service';

// store
import { useDispatch } from 'react-redux';
import { get as getTodos } from '../../../store/todos/slice';
import { useSelector } from 'react-redux'
import { Store } from '../../../store';

export default function DashboardIndex() {
  const dispatch = useDispatch();

  // page component state
  const [checked, setChecked] = React.useState([0]);

  // data
  React.useEffect(() => {
    service.get(
      `${process.env.API_DOMAIN}/todos`,
    ).then((payload): void => {
      dispatch(getTodos(payload))
    }).catch(error => {
      alert('Error fetching your todos! :(')
    });
  }, []);
  const todoData = useSelector((state: Store) => state.todos).todos

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (todoData.length === 0) {
    return <div>loading data</div>
  }

  return (
    <List sx={{ width: '100%', maxWidth: 1024, bgcolor: 'background.paper' }}>
      {todoData.map(({ id, todo }) => {
        const labelId = `checkbox-list-label-${id}`;

        return (
          <ListItem
            key={labelId}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}