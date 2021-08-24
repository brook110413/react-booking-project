import React from 'react';
import styled, { css } from 'styled-components';
import { DropdownButton } from 'react-bootstrap';

import color from '@Style/color';

const BasicDropdownButton = (props) => {
  return (
    <StyledDropdownButton {...props}>{props.children}</StyledDropdownButton>
  );
};

const StyledDropdownButton = styled(DropdownButton)``;

export default BasicDropdownButton;
