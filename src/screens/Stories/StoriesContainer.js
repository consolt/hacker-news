import React, {useEffect, useState} from 'react';
import HackerNewsService from '../../services/HackerNewsService';
import {Button} from '@mui/material';
import StoriesView from './StoriesView';
import Loading from '../../components/Loading';
import {createStyles, makeStyles} from '@material-ui/styles';

const STORIES_PER_PAGE = 10;

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);


const StoriesContainer = () => {
  const classes = useStyles();
  const [storyIds, setStoryIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleStories, setVisibleStories] = useState(STORIES_PER_PAGE);

  useEffect(async () => {
    setIsLoading(true);
    const result = await HackerNewsService.fetchStoryIds();
    setStoryIds(result.data);
    setIsLoading(false);
  }, []);

  const handleMoreButtonPressed = () => {
    setVisibleStories(visibleStories => visibleStories + STORIES_PER_PAGE);
  };

  const renderMoreButton = () => {
    if (storyIds.length > visibleStories) {
      return <Button variant='contained' onClick={handleMoreButtonPressed}>More</Button>;
    }
  };

  if (isLoading) {
    return <Loading/>;
  } else {
    return (
      <div className={classes.root}>
        <StoriesView
          storyIds={storyIds}
          visibleStories={visibleStories}
        />
        {renderMoreButton()}
      </div>
    );
  }
};

export default StoriesContainer;
