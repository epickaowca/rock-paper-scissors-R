import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlayAgain from "./PlayAgain";

export const standardPlayAgain: ComponentStory<any> = (args) => (
  <PlayAgain {...args} />
);

standardPlayAgain.args = {
  animationPlayAgain: true,
};

export default {
  title: "molecules/playAgain",
  component: PlayAgain,
} as ComponentMeta<any>;
