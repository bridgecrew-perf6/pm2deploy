import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonRound from '../../../src/components/Button/ButtonRound';

const buttonRoundStory = storiesOf('Button/Round', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('as button', () => <ButtonRound background={"default"} icon={"add"} />)
  .add('as submit', () => <ButtonRound tag={"button"} type={"submit"} background={"default"} icon={"add"} />)
  .add('as a', () => <ButtonRound tag={"a"} background={"default"} icon={"add"} />)
  .add('as a with new tab', () => <ButtonRound tag={"a"} href={"http://www.google.com"} target={"_blank"} background={"default"} icon={"add"} />)
  .add('as span', () => <ButtonRound tag={"span"} background={"default"} icon={"add"} />)

export default buttonRoundStory;