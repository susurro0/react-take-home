import React from 'react'

import MediaList from "../media/MediaList";
import Campaign from "./Campaign";

function CampaignCard(props) {
  return (
    <>
      <Campaign />
      <MediaList />
    </>
  );
}

export default CampaignCard;
