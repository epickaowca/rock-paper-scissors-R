import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectMode from "./SelectMode";

export const StandardSelectMode: ComponentStory<any> = (args) => (
  <SelectMode {...args} />
);

export default {
  title: "molecules/selectMode",
  component: SelectMode,
} as ComponentMeta<any>;
