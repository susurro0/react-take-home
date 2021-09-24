import * as React from "react";

import { Row, Col, Card, Image, Stack } from "react-bootstrap";
import "./Campaign.css";

function Campaign(props) {
  return (
    <Stack direction="horizontal" gap={3}>
      <Row>
        <Col className="image_container">
          <Image
            src="https://placekitten.com/200/300"
            rounded
            className="logo"
          />
        </Col>
        <Col className="info_container">
          <div>
            <Card.Title className="campaign_name">Campaign</Card.Title>
            <Card.Text className="pay_per_install">pay per install</Card.Text>
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default Campaign;
