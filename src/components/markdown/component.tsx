import React, { Component } from "react";
import { Markdown } from "react-showdown";

interface PublicProps {
  text: string;
}

type Props = PublicProps;

export class MarkdownView extends Component<Props, {}> {
  // private showdownOptions: showdown.ConverterOptions = {
  //   omitExtraWLInCodeBlocks: true,
  //   simplifiedAutoLink: true,
  //   excludeTrailingPunctuationFromURLs: true,
  //   strikethrough: true,
  //   tables: true,
  //   tasklists: true,
  //   disableForced4SpacesIndentedSublists: true,
  //   simpleLineBreaks: true
  // };

  public render() {
    return <Markdown markup={this.props.text} />;
  }
}
