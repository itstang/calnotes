import React, { Component } from 'reactn';
import { Layout } from 'src/core';
import { MarkdownView } from 'src/components/markdown';
import { TextArea } from 'src/components/markdown/textarea';

interface PublicProps {}

type Props = PublicProps;

export class Editor extends Component<Props, {}> {
  public render() {
    return (
      <Layout padding={{ x: 5, y: 5 }}>
        <TextArea />
        <MarkdownView text={this.global.markdownInput} />
      </Layout>
    );
  }
}
