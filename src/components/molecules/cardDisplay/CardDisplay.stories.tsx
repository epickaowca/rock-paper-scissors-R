import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardDisplay from "./CardDisplay";

const basic: ComponentStory<any> = (args) => <CardDisplay {...args} />;

export const playerCard = basic.bind({});
playerCard.args = {
  animation: "player",
  side: "left",
  imgName: "rock",
};

export const aiCard = basic.bind({});
aiCard.args = {
  animation: "ai",
  side: "right",
  imgName: "rock",
};

export default {
  title: "molecules/CardDisplay",
  component: CardDisplay,
} as ComponentMeta<any>;
