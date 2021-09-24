import React from 'react'

import MediaList from "../media/MediaList";
import Campaign from "./Campaign";

function CampaignCard(props) {
  return (
    <>
      <Campaign data={props.data} key={props.id} />
      <MediaList medias={props.data.medias} key={props.id} />
      <hr/>
    </>
  );
}

export default CampaignCard;