import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import color from '@/style/color';
import { device } from '@Style/browser';

const list = ['FAQs', 'Terms of use', 'Privacy policy'];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    if (year) {
      setCurrentYear(year);
    } else {
      setCurrentYear(2023);
    }
  }, []);

  return (
    <StyledWrapper>
      <StyledContainer>
        <span className="copyright">
          © {currentYear} ALOHA, Inc. All rights reserved.
        </span>
        <ul className="d-flex" style={{ gap: 24 }}>
          {list.map((item) => (
            <li key={item}>{item} </li>
          ))}
        </ul>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${color.primary};
  color: ${color.white};

  .copyright {
    margin-right: 64px;

    ${device.wideMobile} {
      margin: 0;
    }
  }
`;

const StyledContainer = styled(Container)`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${device.wideMobile} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
  }
`;

Footer.propTypes = {};

export default Footer;
