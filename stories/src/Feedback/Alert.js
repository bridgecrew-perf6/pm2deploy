import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../../src/components/Button/Button';

const buttonStory = storiesOf('Button/Normal', module)
  .addDecorator((story, context) => withInfo('Button component to trigger event')(story)(context))
  .add('as button', () => <Button background={"default"} />)
  .add('as submit', () => <Button tag={"button"} type={"submit"} background={"default"} />)
  .add('as a', () => <Button tag={"a"} background={"default"} />)
  .add('as a with new tab', () => <Button tag={"a"} href={"http://www.google.com"} target={"_blank"} background={"default"} />)
  .add('as span', () => <Button tag={"span"} background={"default"} />)

  .add('Default', () => <Button background={"default"} />)
  .add('Default With Icon', () => <Button background={"default"} icon={"add"} />)

  .add('Primary', () => <Button background={"primary"} />)
  .add('Primary With Icon', () => <Button background={"primary"} icon={"add"} />)
  .add('Primary With Loading', () => <Button background={"primary"} loading={true} />)

  .add('Secondary', () => <Button background={"secondary"} />)
  .add('Secondary With Icon', () => <Button background={"secondary"} icon={"add"} />)
  .add('Secondary With Loading', () => <Button background={"secondary"} loading={true} />)

  .add('Red', () => <Button background={"red"} />)
  .add('Red With Icon', () => <Button background={"red"} icon={"add"} />)
  .add('Red With Loading', () => <Button background={"red"} loading={true} />)

  .add('Disabled', () => <Button background={"default"} disabled={true} />)
  .add('Disabled With Icon', () => <Button background={"default"} icon={"account"} disabled={true} />)
  .add('Disabled With Loading', () => <Button background={"default"} loading={true} disabled={true} />)

  .add('Plain', () => <Button background={"plain"} />)
  .add('Plain With Disabled', () => <Button background={"plain"} disabled={true} />)

export default buttonStory;