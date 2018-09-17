import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Select from '../../../src/components/Form/Select/Select';

const options = [
  {
    text: "Mango",
    value: "1"
  },
  {
    text: "Blackberry",
    value: "2"
  },
  {
    text: "Strawberry",
    value: "3"
  },
  {
    text: "Melon",
    value: "4"
  },
];

const selectStory = storiesOf('Form/Select', module)
  .addDecorator((story, context) => withInfo('Select to receive input from user')(story)(context))
  .add('Default', () => <Select option={options} />)
  .add('with Icon', () => <Select option={options} icon={"add"} />)
  .add('with Placeholder', () => <Select option={options} placeholder={"This is a placeholder"} />)
  .add('with Label', () => <Select option={options} label={"Favorite Fruit"} />)
  .add('with error', () => <Select option={options} state={"error"} />)
  .add('disabled', () => <Select option={options} disabled={true} />)
  .add('with Icon disabled', () => <Select option={options} icon={"add"} disabled={true} />)

export default selectStory;