import React from 'react';

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Button Basic',
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button Primary',
  primary: true,
  size: 'large',
};
