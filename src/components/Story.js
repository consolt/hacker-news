import React, {useEffect, useState} from 'react';
import HackerNewsService from '../services/HackerNewsService';
import {Link, ListItem, ListItemText, Typography} from '@mui/material';
import {createStyles, makeStyles} from '@material-ui/styles';
import moment from 'moment';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(
  createStyles({
    description: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    descriptionItem: {
      marginLeft: '10px',
    },
  }),
);

const Story = ({storyId}) => {
  const classes = useStyles();
  const [story, setStory] = useState(null);

  useEffect(async () => {
    const result = await HackerNewsService.fetchStoryById(storyId);
    setStory(result.data);
  }, []);

  if (story) {
    const {title, score, time, by, descendants} = story;
    return (
      <Link underline="none" variant="subtitle2" component={RouterLink} to={`/story/${storyId}`}>
        <ListItem>
          <ListItemText
            primary={title}
            secondary={
              <div className={classes.description}>
                <Typography sx={{display: 'inline'}} component='span' variant='body2' color='text.primary'
                >
                  By {by}
                </Typography>
                <Typography className={classes.descriptionItem}
                            variant='body2' color='text.secondary'>{moment.unix(time).fromNow()}
                </Typography>
                <Typography className={classes.descriptionItem}
                            variant='body2' color='text.secondary'>{descendants} total comments
                </Typography>
                <Typography className={classes.descriptionItem}
                            variant='body2' color='text.secondary'>{score} points
                </Typography>
              </div>
            }
          />
        </ListItem>
      </Link>
    );
  }
  else {
    return (
      <ListItem>
        <ListItemText
          secondary={
            <Typography className={classes.descriptionItem} variant='body2' color='text.secondary'>
              ...
            </Typography>
          }
        />
      </ListItem>
    );
  }
};


export default Story;
