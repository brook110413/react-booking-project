import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import color from '@/style/color';

const Footer = (props) => {
  const list = ['FAQs', 'Terms of use', 'Privacy policy'];

  return (
    <StyledWrapper>
      <StyledContainer>
        <span className="copyright">
          © 2021 ALOHA, Inc. All rights reserved.
        </span>
        <ul className="d-flex" style={{ gap: 24 }}>
          {list.map((item) => (
            <li key={item}>{item} </li>
          ))}
        </ul>
      </StyledContainer>
    </StyledWrapper>
    // <Container>
    // </Container>
  );
};

const StyledWrapper = styled.div`
  /* padding: 24px 0;
  display: flex;
  justify-content: space-between;
  width: 100%; */
  background-color: ${color.primary};
  color: ${color.white};

  .copyright {
    margin-right: 64px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

Footer.propTypes = {};

export default Footer;
