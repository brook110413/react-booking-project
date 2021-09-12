import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import color from '@Style/color';

const Main = (props) => {
  const chosenHotel = useSelector((state) => state.global.chosenHotel);

  return (
    <StyledWrapper>
      <Row>
        <Col lg={7}>
          <div className="hotelMain">
            <div className="d-flex align-items-center mb-2">
              <div className="hotelTitle">{chosenHotel.name}</div>
              <div className="me-1">
                {chosenHotel.rankIcon.map((icon, i) => (
                  <span key={`icon-${i}`}>{icon}</span>
                ))}
              </div>
              <span
                className="rank open-sans ms-1"
                style={{ color: color.gray }}
              >
                {chosenHotel.rank}
              </span>
            </div>
            <div
              className="open-sans mb-4"
              style={{ color: color.primary, fontSize: 14 }}
            >
              318 Phaya Thai Road, Ratchathewi, Phaya Thai, 10400 Bangkok,
              Thailand
            </div>

            <div
              className="open-sans"
              style={{ color: color.darkGray, fontSize: 14, lineHeight: 1.5 }}
            >
              The Rachada Hotel is an establishment that provides paid lodging
              on a short-term basis. Facilities provided may range from a
              modest-quality mattress in a small room to large suites with
              bigger, higher-quality beds, a dresser, a refrigerator and other
              kitchen facilities, upholstered chairs, a flat screen television,
              and en-suite bathrooms.
            </div>
          </div>
        </Col>
      </Row>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hotelMain {
    padding: 24px 0 72px;

    .hotelTitle {
      font-size: 32px;
      font-weight: bold;
      margin-right: 16px;
    }
  }
`;

Main.propTypes = {};

export default Main;
