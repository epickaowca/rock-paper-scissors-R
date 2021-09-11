import ScoreDisplayer from "./ScoreDisplay";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export const standardDisplayer: ComponentStory<any> = (args) => (
  <ScoreDisplayer {...args} />
);
standardDisplayer.args = {
  points: 12,
};

export default {
  title: "molecules/scoreDisplayer",
  component: ScoreDisplayer,
} as ComponentMeta<any>;
