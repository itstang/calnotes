declare module "react-showdown" {
  import * as React from "react";

  interface props {
    markup: string;
  }

  class Markdown extends React.Component<props> {}
}
