import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonOval from '../../../src/components/Button/ButtonOval';

const buttonOvalStory = storiesOf('Button/Oval', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('as button', () => <ButtonOval background={"default"} icon={"add"} />)
  .add('as submit', () => <ButtonOval tag={"button"} type={"submit"} background={"default"} icon={"add"} />)
  .add('as a', () => <ButtonOval tag={"a"} background={"default"} icon={"add"} />)
  .add('as a with new tab', () => <ButtonOval tag={"a"} href={"http://www.google.com"} target={"_blank"} background={"default"} icon={"add"} />)
  .add('as span', () => <ButtonOval tag={"span"} background={"default"} icon={"add"} />)
  .add('with Icon', () => <ButtonOval tag={"span"} background={"default"} icon={"add"} />)
  .add('with Text', () => <ButtonOval tag={"span"} background={"default"} text={"content"} />)
  .add('Default', () => <ButtonOval background={"default"} icon={"add"} />)
  .add('Outline', () => <ButtonOval background={"outline"} icon={"add"} />)

export default buttonOvalStory;