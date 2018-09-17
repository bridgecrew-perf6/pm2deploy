import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonGroup from '../../../src/components/Button/ButtonGroup';
import Button from '../../../src/components/Button/Button';

const buttonGroupStory = storiesOf('Button/ButtonGroup', module)
  .addDecorator((story, context) => withInfo('Button Group to give button spacing between button')(story)(context))
  .add('Position Left', () =>
    <ButtonGroup position={"left"}>
      <Button background={"default"} />
      <Button background={"primary"} />
    </ButtonGroup>
  )
  .add('Position Center', () =>
    <ButtonGroup position={"center"}>
      <Button background={"default"} />
      <Button background={"primary"} />
    </ButtonGroup>
  )
  .add('Position Right', () =>
    <ButtonGroup position={"right"}>
      <Button background={"default"} />
      <Button background={"primary"} />
    </ButtonGroup>
  )

export default buttonGroupStory;