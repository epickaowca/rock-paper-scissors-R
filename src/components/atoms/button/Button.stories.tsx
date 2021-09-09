import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

const basic: ComponentStory<any> = (args) => <Button {...args} />;

export const standardBtn = basic.bind({});
standardBtn.args = {
  content: "play again",
};

export const ruleBtn = basic.bind({});
ruleBtn.args = {
  content: "rules",
  ruleCase: true,
};

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<any>;
