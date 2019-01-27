import React, { Component } from 'reactn';
import { MarkdownView } from '../markdown';
import { TextArea } from '../markdown/textarea';

interface PublicProps {}

type Props = PublicProps;

export class Editor extends Component<Props, {}> {
  public render() {
    return (
      <div>
        <TextArea />
        <MarkdownView text={this.global.markdownInput} />
      </div>
    );
  }
}
