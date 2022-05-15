import React from 'react';
import { storiesOf, ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import  button, {ButtonType, ButtonSize}  from './button';

// import "../../styles/index.scss"
import "./_style.scss"



// const defaultButton = () => {
//   <Button onClick={action('clicked')}>default button</Button>
// }
// storiesOf("Button Component", module).add("默认Button", defaultButton)



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'button',
  component: button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof button> = (args) => <button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: ButtonType.Primary,
  children: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: ButtonType.Danger,
  children: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'disabled'
};


export const Link = Template.bind({});
Link.args = {
  href: 'https://www.baidu.com',
  children: 'link'
};
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'button',
// };

// export const MyButton = Template.bind({});
// MyButton.args = {
//   size: "large",
//   onClick: () => {
//     alert("This is my button")
//   },
//   label: "button"
// }
