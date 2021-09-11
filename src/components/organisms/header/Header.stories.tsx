import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export const standardHeader: ComponentStory<any> = () => <Header />;

export default {
  title: "organisms/Header",
  component: Header,
} as ComponentMeta<any>;
