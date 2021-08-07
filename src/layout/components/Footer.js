import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = (props) => {
  const list = ['FAQs', 'Terms of use', 'Privacy policy'];

  return (
    <StyledWrapper>
      <span className="copyright">© 2021 ALOHA, Inc. All rights reserved.</span>
      <ul className="d-flex" style={{ gap: 24 }}>
        {list.map((item) => (
          <li key={item}>{item} </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 24px 85px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .copyright {
    margin-right: 64px;
  }
`;

Footer.propTypes = {};

export default Footer;
