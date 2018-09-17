import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from '../../src/components/Icon/Icon';
import * as IconCollection from '../../src/components/Icon/assets';

let iconStory = storiesOf('Icon', module)
  .addDecorator((story, context) => withInfo('Icon components used for inserting Icon from SVG')(story)(context))
  .add('Size - Extra Small', () => <Icon type={"add"} size={"xs"} />)
  .add('Size - Small', () => <Icon type={"add"} size={"s"} />)
  .add('Size - Regular', () => <Icon type={"add"} size={"m"} />)
  .add('Size - Large', () => <Icon type={"add"} size={"l"} />)
  .add('NOT FOUND!!!', () => <Icon type={"some-random-text"} size={"m"} />)

Object.keys(IconCollection).forEach((value) => {
  const iconType = value.replace(/([-|][0-9a-z])/g, function (match) {
    return match[1].toUpperCase();
  }).replace(/(^[a-z])/g, function (match) {
    return match[0].toUpperCase();
  });
  iconStory.add(iconType, () => <Icon type={iconType} size={"m"} />)
})

export default iconStory;