import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import InputDatePicker from '../../../src/components/Form/Input/InputDatePicker';

const inputStory = storiesOf('Form/DatePicker', module)
  .addDecorator((story, context) => withInfo('DatePicker to receive input from user')(story)(context))
  .add('Default', () => <InputDatePicker />)

export default inputStory;