import React from 'react';

import Pulsar from './Pulsar';

export default {
  title: 'Animation/Pulsar',
  component: Pulsar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    colorPulsar: {
      control: 'color',
    },
  },
};

const Template = (args) => <Pulsar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 1,
  // colorPulsar: null,
  label: 'Pulsar Animation',
};
