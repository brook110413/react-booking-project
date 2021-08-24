import React from 'react';
import color from '@/style/color';
import Select from 'react-select';

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
    backgroundColor: `${color.white}`,
    color: state.isDisabled && `${color.darkGray}`,

    '&:hover': {
      borderColor: `${color.bgShade}`,
      // cursor: state.isDisabled && 'not-allowed',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: `${color.darkGray}`,
    display: 'flex',
    alignItems: 'center',
    background: `url(images/place.svg) no-repeat 2px center ${color.white}`,
    height: '24px',
    padding: '0 0 0 40px',
    margin: 0,
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
    color: state.isDisabled && `${color.black}`,
    padding: '0 0 0 40px',
    background: `url(images/place.svg) no-repeat 2px center ${color.white}`,
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    cursor: state.isDisabled && 'not-allowed',
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: '0 16px',
    height: '24px',
    cursor: state.isDisabled && 'not-allowed',
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
