import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardDisplay from "./CardDisplay";

const basic: ComponentStory<any> = (args) => <CardDisplay {...args} />;

export const standardCardDisplay = basic.bind({});
standardCardDisplay.args = {
  animation: "ai",
  side: "left",
};

export default {
  title: "molecules/CardDisplay",
  component: CardDisplay,
} as ComponentMeta<any>;
