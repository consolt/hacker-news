import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import StoriesContainer from '../screens/Stories/StoriesContainer';
import StoryDetailsContainer from '../screens/StoryDetails/StoryDetailsContainer';

// ----------------------------------------------------------------------

const Router = () => {
  const screens = [
    {
      path: '/', element: <StoriesContainer/>,
    },
    {
      path: '/story/:id',
      element: <StoryDetailsContainer/>,
    },
    {
      path: '/404',
      element: <p>Not Found</p>,
    },
    {
      path: '*', element: <Navigate to="/404" replace/>,
    },
  ];

  return useRoutes(screens);
};

export default Router;
