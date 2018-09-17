import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Toggle from '../../../src/components/Form/Toggle/Toggle';

const toggleOptions = [
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

const toggleStory = storiesOf('Form/Toggle', module)
  .addDecorator((story, context) => withInfo('Toggle to receive input from user')(story)(context))
  .add('Default', () =>
    toggleOptions.map((item, index) =>
      <div>
        <Toggle name={"fruit"} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('with Label', () =>
    toggleOptions.map((item, index) =>
      <div>
        <Toggle name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('disabled', () =>
    toggleOptions.map((item, index) =>
      <div>
        <Toggle name={"fruit"} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )
  .add('disabled with Label', () =>
    toggleOptions.map((item, index) =>
      <div>
        <Toggle name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )

export default toggleStory;