import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export const StandardBtn: ComponentStory<any> = (args) => <Button />;

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<any>;
