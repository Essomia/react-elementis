import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
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

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Login',
  primary: true,
};

Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Login/i });

  await userEvent.click(loginButton);
};
