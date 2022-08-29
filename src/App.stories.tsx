import { ComponentMeta } from "@storybook/react";
import App from "App";

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>;

export const AppPage = () => <App />;
