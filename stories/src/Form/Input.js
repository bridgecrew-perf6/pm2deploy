import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Input from '../../../src/components/Form/Input/Input';

const inputStory = storiesOf('Form/Input', module)
  .addDecorator((story, context) => withInfo('Input to receive input from user')(story)(context))
  .add('Default', () => <Input />)
  .add('Default with Placeholder', () => <Input placeholder={"This is a placeholder"} />)
  .add('Default with error', () => <Input state={"error"} />)
  .add('Default disabled', () => <Input disabled={true} />)

  .add('Number', () => <Input type={"number"} />)
  .add('Number with Placeholder', () => <Input type={"number"} placeholder={"This is a placeholder"} />)
  .add('Number with error', () => <Input type={"number"} state={"error"} />)
  .add('Number disabled', () => <Input type={"number"} disabled={true} />)

  .add('Textarea', () => <Input type={"textarea"} />)
  .add('Textarea with Placeholder', () => <Input type={"textarea"} placeholder={"This is a placeholder"} />)
  .add('Textarea with error', () => <Input type={"textarea"} state={"error"} />)
  .add('Textarea disabled', () => <Input type={"textarea"} disabled={true} />)

  .add('with Label', () => <Input label={"Username"} id={"username"} />)
  .add('with Icon Left', () => <Input placeholder={"Quick Find..."} icon={{ type: "Quickfind", position: "left" }} />)
  .add('with Icon Right', () => <Input placeholder={"Search..."} icon={{ type: "Search", position: "right" }} />)

export default inputStory;