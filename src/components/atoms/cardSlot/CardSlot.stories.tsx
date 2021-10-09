import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardSlot from "./CardSlot";

export const standardCardSlot: ComponentStory<any> = (args) => (
  <CardSlot {...args} />
);

export default {
  title: "atoms/cardSlot",
  component: CardSlot,
} as ComponentMeta<any>;
