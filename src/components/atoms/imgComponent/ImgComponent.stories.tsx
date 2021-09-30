import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImgComponent from "./ImgComponent";

export const standardImgComponent: ComponentStory<any> = (args) => (
  <ImgComponent {...args} />
);

standardImgComponent.args = {
  imgName: "bg-pentagon.svg",
  alt: "cos",
};

export default {
  title: "atoms/imgComponent",
  component: ImgComponent,
} as ComponentMeta<any>;
