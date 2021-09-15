import Battle from "./Battle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export const standardBattle: ComponentStory<any> = (args) => (
  <Battle {...args} />
);

export default {
  title: "organisms/Battle",
  component: Battle,
} as ComponentMeta<any>;
