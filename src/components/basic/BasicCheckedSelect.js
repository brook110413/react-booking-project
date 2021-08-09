import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '@/style/color';
import Select from 'react-select';
import { BsStarFill } from 'react-icons/bs';

const customStyles = {
  option: (base, state) => ({
    background:
      state.isSelected &&
      `url(images/icons/icon-check.svg) no-repeat 8px center ${color.white}`,
    color: state.isSelected && `${color.black}`,
    padding: '4px 0 4px 40px',
    display: state.isDisabled ? 'none' : 'flex',

    '&:hover': {
      backgroundColor: state.isSelected ? `${color.white}` : `${color.primary}`,
      color: state.isSelected ? `${color.black}` : `${color.white}`,
      cursor: state.isSelected ? 'default' : 'pointer',
    },
  }),
  control: (base, state) => ({
    ...base,
    height: '38px',
    backgroundColor: state.isDisabled && `${color.white}`,
    borderColor: state.isDisabled ? `${color.white}` : `${color.bgShade}`,
    borderRadius: '6px',
    boxShadow: state.isFocused && `0 0 0 1.5px ${color.primary}`,

    '&:hover': {
      borderColor: `${color.bgShade}`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(44, 39, 56, 0.24)',
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
  }),
  valueContainer: (base, state) => ({
    ...base,
    // padding: state.isDisabled ? '6px 0' : '6px 12px',
    padding: state.isDisabled ? '0' : '0 10px',
    // height: '36px',
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    height: '38px',
  }),
  menuList: (base, state) => ({
    ...base,
    maxHeight: '200px',
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
