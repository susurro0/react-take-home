import * as React from "react";

import {Row, Col, Card, Image, Stack } from "react-bootstrap";
import "./Campaign.css";

function Campaign(props) {
  return (
    <Stack direction="horizontal" gap={3}>
      <Row className="campaign_container">
        <Col className="image_container">
          <Image src={props.data.campaign_icon_url} rounded className="logo" />
        </Col>
        <Col className="info_container">
          <div>
            <Card.Title className="campaign_name">
              {props.data.campaign_name}
            </Card.Title>
            <Card.Text className="pay_per_install">
              {props.data.pay_per_install + " per install"}
            </Card.Text>
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default Campaign;
