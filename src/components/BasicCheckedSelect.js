import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '@/style/color';
import Select from 'react-select';
import { BsStarFill } from 'react-icons/bs';

const customStyles = {
  option: (base, state) => ({
    background:
      state.isSelected &&
      `url(images/done.svg) no-repeat 16px center ${color.white}`,
    color: state.isSelected && `${color.black}`,
    padding: '16px 0 16px 56px',
    display: state.isDisabled ? 'none' : 'flex',
    zIndex: 10,

    '&:hover': {
      backgroundColor: state.isSelected ? `${color.white}` : `${color.primary}`,
      color: state.isSelected ? `${color.black}` : `${color.white}`,
      cursor: state.isSelected ? 'default' : 'pointer',
    },
  }),
  control: (base, state) => ({
    ...base,
    height: '56px',
    width: '232px',
    border: 'none',
    borderRadius: '4px',
    boxShadow: state.isFocused && `0 0 0 1.5px ${color.primary}`,

    '&:hover': {
      borderColor: `${color.bgShade}`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: `${color.darkGray}`,
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: `${color.primary}`,
    display: state.isDisabled ? 'none' : 'flex',

    '&:hover': {
      color: `${color.primary}`,
    },
  }),
  singleValue: (base, state) => ({
    color: state.isDisabled && `${color.secondary}`,
    padding: '0 0 0 40px',
    background: `url(images/place.svg) no-repeat 0 center ${color.white}`,
    height: '24px',
    display: 'flex',
    alignItems: 'center',
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: '0 16px',
    height: '24px',
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    height: '56px',
    padding: '0 8px 0 0',
  }),
};

const BasicCheckedSelect = React.forwardRef((props, ref) => {
  return (
    <div className={`select-container ${props.grid ? props.grid : ''}`}>
      <Select
        {...props}
        innerRef={ref}
        ref={ref}
        className="react-select"
        classNamePrefix={props.className}
        isSearchable={props.isSearchable || false}
        isDisabled={props.disabled || false}
        styles={customStyles}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default React.memo(BasicCheckedSelect);
