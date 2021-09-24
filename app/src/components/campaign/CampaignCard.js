import React from 'react'

import MediaList from "../media/MediaList";
import Campaign from "./Campaign";


/**
 * CampaignCard Component, shows Campaign cata and Media list
 * @param {object} props Component props, 
 * {
 *  data: {object = {
 *            campaign_icon_url: {url}
 *            campaign_name: {string}
 *            pay_per_install: {number}
 *            medias: {object}
 *        }}
 * }
 *
 */
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