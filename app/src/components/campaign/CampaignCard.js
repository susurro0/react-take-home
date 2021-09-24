import React from 'react'

import MediaList from "../media/MediaList";
import Campaign from "./Campaign";

function CampaignCard(props) {

    console.log(props.data);
  return (
    <>
      <Campaign/>
      <MediaList />
    </>
  );
}

export default CampaignCard;
