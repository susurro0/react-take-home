import * as React from "react";

import "./Campaign.css";

import { Row, Col, Image, Stack } from "react-bootstrap";

function Campaign(props) {
  return (
    <Stack direction="horizontal" gap={3}>
      <Row className="campaign_container">
        <Col className="image_container">
          <Image
            src="https://placekitten.com/200/300"
            rounded
            className="logo"
          />
        </Col>
        <Col className="info_container">
          <div>
            <div className="campaign_name">
              Campaign name
            </div>
            <div className="pay_per_install">
              pay per install
            </div>
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default Campaign;
