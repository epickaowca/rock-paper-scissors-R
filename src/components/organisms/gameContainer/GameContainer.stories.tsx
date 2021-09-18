import { ComponentMeta, ComponentStory } from "@storybook/react";
import GameContainer from "./GameContainer";

export const standardGameContainer: ComponentStory<any> = (args) => (
  <GameContainer {...args} />
);

export default {
  title: "organisms/GameContainer",
  component: GameContainer,
} as ComponentMeta<any>;
