import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardSlot from "./CardSlot";

const basic: ComponentStory<any> = (args) => <CardSlot {...args} />;

export const standardCardSlot = basic.bind({});

export const withAnimation = basic.bind({});
withAnimation.args = {
  animation: true,
};

export default {
  title: "atoms/cardSlot",
  component: CardSlot,
} as ComponentMeta<any>;
