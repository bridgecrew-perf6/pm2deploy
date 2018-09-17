import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Radio from '../../../src/components/Form/Radio/Radio';

const radioOptions = [
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

const radioStory = storiesOf('Form/Radio', module)
  .addDecorator((story, context) => withInfo('Radio to receive input from user')(story)(context))
  .add('Default', () =>
    radioOptions.map((item, index) =>
      <div>
        <Radio name={"fruit"} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('with Label', () =>
    radioOptions.map((item, index) =>
      <div>
        <Radio name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} />
      </div>
    )
  )
  .add('disabled', () =>
    radioOptions.map((item, index) =>
      <div>
        <Radio name={"fruit"} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )
  .add('disabled with Label', () =>
    radioOptions.map((item, index) =>
      <div>
        <Radio name={"fruit"} label={item.text} value={item.value} key={index} checked={item.checked} disabled={true} />
      </div>
    )
  )

export default radioStory;