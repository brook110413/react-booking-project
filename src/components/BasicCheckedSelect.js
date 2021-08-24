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
    height: '56px',
    width: '232px',
    // backgroundColor: state.isDisabled && `${color.white}`,
    // backgroundColor: `${color.white}`,
    // background: `url(images/icons/icon-check.svg) no-repeat 8px center ${color.white}`,
    // borderColor: state.isDisabled ? `${color.white}` : `${color.bgShade}`,
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
    background: `url(${(<BsStarFill />)}) no-repeat 8px center ${color.white}`,
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
  }),
  valueContainer: (base, state) => ({
    ...base,
    // padding: state.isDisabled ? '0' : '0 10px',
    padding: '0 16px',
    height: '24px',
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    height: '56px',
    padding: '0 8px 0 0',
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
