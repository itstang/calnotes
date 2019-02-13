import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import { Layout } from 'src/core';
import './style.scss';

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
    return (
      <Layout className="mkdn-preview" padding={{ x: 1 }}>
        <Markdown markup={this.props.text} />
      </Layout>
    );
  }
}
