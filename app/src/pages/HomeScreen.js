import React from 'react'
import Campaign from '../components/campaign/Campaign';

import MediaImage from '../components/media/MediaImage'
import MediaList from '../components/media/MediaList';
import Video from '../components/media/Video';
import VideoCard from '../components/media/VideoCard';
function HomeScreen(props) {
  return (
    <div>
      
      <MediaList src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
    </div>
  );
}

export default HomeScreen;
