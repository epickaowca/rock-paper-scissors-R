import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectCard from "./SelectCard";

const basic: ComponentStory<any> = (args) => <SelectCard {...args} />;

export const standard = basic.bind({});
standard.args = {
  gameType: "standard",
};

export const extended = basic.bind({});
extended.args = {
  gameType: "extended",
};

export default {
  title: "organisms/selectCard",
  component: SelectCard,
} as ComponentMeta<any>;
