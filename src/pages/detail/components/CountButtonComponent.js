import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import { setCount } from '@Actions/globalAction';

const CountButtonComponent = () => {
  const dispatch = useDispatch();
  const isWideMobile = useMediaQuery({
    query: '(max-width: 525px)',
  });

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
        className={!isWideMobile ? 'me-3' : null}
        onClick={() => minusCount()}
        disabled={count <= 0}
      >
        <MdRemove size={isWideMobile ? 16 : 24} />
      </button>
      <div className="count">{count}</div>
      <button
        type="button"
        className={!isWideMobile ? 'ms-3' : null}
        onClick={addCount}
      >
        <MdAdd size={isWideMobile ? 16 : 24} />
      </button>
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
