import React from 'react';
import {Typography} from '@mui/material';
import moment from 'moment';
import {createStyles, makeStyles} from '@material-ui/styles';

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


const StoryDetailsView = ({story}) => {
  const classes = useStyles();

  if (story) {
    const {time, descendants, score, title, by, text} = story;
    return (
      <div>
        <Typography variant='body1' color='text.primary'>{title}</Typography>
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
        {text}
      </div>
    );
  } else {
    return null;
  }
};


export default StoryDetailsView;
