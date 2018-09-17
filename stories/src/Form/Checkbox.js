import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Checkbox from '../../../src/components/Form/Checkbox/Checkbox';

const checkboxOptions = [
  {
    text: "Mango",
    value: "1"
  },
  {
    text: "Blackberry",
    value: "2",
    checked: true
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

const checkboxStory = storiesOf('Form/Checkbox', module)
  .addDecorator((story, context) => withInfo('Checkbox to receive input from user')(story)(context))
  .add('Default', () =>
    checkboxOptions.map((item, index) =>
      <div>
        <Checkbox name={"fruit"} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('with Label', () =>
    checkboxOptions.map((item, index) =>
      <div>
        <Checkbox name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('disabled', () =>
    checkboxOptions.map((item, index) =>
      <div>
        <Checkbox name={"fruit"} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )
  .add('disabled with Label', () =>
    checkboxOptions.map((item, index) =>
      <div>
        <Checkbox name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )

export default checkboxStory;