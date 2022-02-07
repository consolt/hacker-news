import {List} from '@mui/material';
import Story from '../../components/Story';
import React from 'react';

const StoriesView = ({storyIds, visibleStories}) => {
  return (
    <List>
      {storyIds.slice(0, visibleStories).map(storyId => (
        <Story key={storyId} storyId={storyId}/>
      ))
      }
    </List>
  );
};

export default StoriesView;
