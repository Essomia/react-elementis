import React from 'react';

import { string, number } from 'prop-types';

import classes from './Pulsar.module.css';

const Button = ({ colorPulsar, size, label, ...props }) => {
  const wrapperStyles = {
    '--animation-pulsar-color': colorPulsar,
    '--animation-pulsar-inner-size': `${size}em`,
  };

  return (
    <div
      type="button"
      className={[classes.root, classes.animatePulsar].join(' ')}
      style={wrapperStyles}
      {...props}
    >
      {label && <span className={classes.label}>{label}</span>}
    </div>
  );
};

Button.propTypes = {
  size: number,
  colorPulsar: string,
  label: string,
};

Button.defaultProps = {
  size: 10,
  colorPulsar: null,
  label: 'Pulsar',
};

export default Button;
