import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

const basic: ComponentStory<any> = (args) => <Typography {...args} />;

export const Paragraf = basic.bind({});
Paragraf.args = {
  content: "Lorem ipsum",
  htmlTag: "p",
};

export const H1 = basic.bind({});
H1.args = {
  content: "Lorem ipsum",
  htmlTag: "h1",
};

export const Score = basic.bind({});
Score.args = {
  content: "Score",
  htmlTag: "p",
  color: "ScoreText",
};

export const DarkText = basic.bind({});
DarkText.args = {
  content: "Rules",
  htmlTag: "p",
  color: "DarkText",
};

export default {
  title: "atoms/typography",
  component: Typography,
} as ComponentMeta<any>;
