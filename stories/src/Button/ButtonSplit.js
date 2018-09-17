import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonSplit from '../../../src/components/Button/ButtonSplit';

const items = [
  {
    tag: "button",
    text: "As Button",
    onClick: () => { alert("Button Clicked") },
  },
  {
    tag: "a",
    href: "#",
    target: "_top",
    text: "As a href this tab",
  },
  {
    tag: "a",
    href: "http://www.google.com",
    target: "_blank",
    text: "As a href new tab",
  },
]

const buttonSplitStory = storiesOf('Button/Split', module)
  .addDecorator((story, context) => withInfo('Button component to trigger event')(story)(context))
  .add('as button', () => <ButtonSplit background={"default"} items={items} />)
  .add('as submit', () => <ButtonSplit tag={"button"} type={"submit"} background={"default"} items={items} />)
  .add('as a', () => <ButtonSplit tag={"a"} background={"default"} items={items} />)
  .add('as a with new tab', () => <ButtonSplit tag={"a"} href={"http://www.google.com"} target={"_blank"} background={"default"} items={items} />)
  .add('as span', () => <ButtonSplit tag={"span"} background={"default"} items={items} />)

  .add('Default', () => <ButtonSplit background={"default"} items={items} />)
  .add('Default With Icon', () => <ButtonSplit background={"default"} icon={"add"} items={items} />)

  .add('Primary', () => <ButtonSplit background={"primary"} items={items} />)
  .add('Primary With Icon', () => <ButtonSplit background={"primary"} icon={"add"} items={items} />)
  .add('Primary With Loading', () => <ButtonSplit background={"primary"} loading={true} items={items} />)

  .add('Secondary', () => <ButtonSplit background={"secondary"} items={items} />)
  .add('Secondary With Icon', () => <ButtonSplit background={"secondary"} icon={"add"} items={items} />)
  .add('Secondary With Loading', () => <ButtonSplit background={"secondary"} loading={true} items={items} />)

  .add('Red', () => <ButtonSplit background={"red"} items={items} />)
  .add('Red With Icon', () => <ButtonSplit background={"red"} icon={"add"} items={items} />)
  .add('Red With Loading', () => <ButtonSplit background={"red"} loading={true} items={items} />)

  .add('Disabled', () => <ButtonSplit background={"default"} disabled={true} items={items} />)
  .add('Disabled With Icon', () => <ButtonSplit background={"default"} icon={"account"} disabled={true} items={items} />)
  .add('Disabled With Loading', () => <ButtonSplit background={"default"} loading={true} disabled={true} items={items} />)

export default buttonSplitStory;