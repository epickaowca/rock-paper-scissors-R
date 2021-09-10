import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

const basic: ComponentStory<any> = (args) => <Card {...args} />;

export const standardCard = basic.bind({});
standardCard.args = {
  imgName: "lizard",
};

export default {
  title: "atoms/card",
  component: Card,
} as ComponentMeta<any>;
