import Home from "./Home";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export const home: ComponentStory<any> = () => <Home />;

export default {
  title: "pages/Home",
  component: Home,
} as ComponentMeta<any>;
