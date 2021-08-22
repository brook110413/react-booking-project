import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';

import { setCount } from '@Actions/globalAction';

const CountButtonComponent = (props) => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.global.count);

  const addCount = () => {
    dispatch(setCount(count + 1));
  };

  const minusCount = () => {
    if (count <= 0) {
      return;
    }

    dispatch(setCount(count - 1));
  };

  return (
    <StyledWrapper>
      <button
        type="button"
        className="me-3"
        onClick={() => minusCount()}
        disabled={count <= 0}
      >
        <MdRemove size={24} />
      </button>
      <div className="count">{count}</div>
      <button type="button" className="ms-3" onClick={addCount}>
        <MdAdd size={24} />
      </button>
      {/* <button>
        <MdCheck size={24} />
      </button> */}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: inherit;
    /* border: none; */
    border-radius: 6px;
    font-size: 24px;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .count {
    width: 20px;
  }
`;

CountButtonComponent.propTypes = {};

export default CountButtonComponent;
