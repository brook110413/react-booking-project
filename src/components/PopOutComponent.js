import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { setCount } from '@Actions/globalAction';

const PopOutComponent = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.global.count);

  const initCount = () => {
    dispatch(setCount(0));
  };

  return (
    <StyledWrapper count={count}>
      <StyledContainer>
        <div className="d-flex flex-column justify-content-center">
          <div
            className="open-sans mb-2"
            style={{ fontSize: 12 }}
          >{`1 room ． ${count} night`}</div>
          <div style={{ fontSize: 24, fontWeight: 'bold' }}>
            TWD {count * 1980}
          </div>
        </div>

        <div className="btnGroup open-sans">
          <Button variant="outline-light" type="button" onClick={initCount}>
            Cancel
          </Button>
          <Button variant="primary" type="button">
            Reserve
          </Button>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: #000000de;
  padding: 12px 0;
  position: sticky;
  bottom: 0;
  color: #ffffffdd;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;

  ${(props) =>
    props.count > 0 &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  .btnGroup {
    display: flex;
    gap: 16px;

    button {
      width: 126px;
      height: 56px;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

PopOutComponent.propTypes = {};

export default PopOutComponent;
