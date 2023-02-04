import React from 'react';

import { bool, string, oneOf, func } from 'prop-types';

import classes from './Button.module.css';

const Button = ({ backgroundColor, label, primary, size, ...props }) => {
  const mode = primary ? classes.buttonPrimary : classes.buttonSecondary;

  const variant = () => {
    switch (size) {
      case 'small':
        return classes.buttonSmall;
      case 'large':
        return classes.buttonLarge;
      default:
        return classes.buttonMedium;
    }
  };

  return (
    <button
      type="button"
      className={[variant(), mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: string,
  label: string.isRequired,
  onClick: func,
  primary: bool,
  size: oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: () => {},
  primary: false,
  size: 'medium',
};

export default Button;
