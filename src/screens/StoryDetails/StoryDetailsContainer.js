import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import HackerNewsService from '../../services/HackerNewsService';
import StoryDetailsView from './StoryDetailsView';
import Loading from '../../components/Loading';

const StoryDetailsContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState(null);
  const params = useParams();
  const storyId = params.id;

  useEffect(async () => {
    setIsLoading(true);
    const result = await HackerNewsService.fetchStoryById(storyId);
    setStory(result.data);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading/>;
  }
  else {
    return <StoryDetailsView story={story}/>
  }

};


export default StoryDetailsContainer;
