import React, { Component } from 'reactn';
import { MarkdownView } from 'src/components/markdown';
import { TextArea } from 'src/components/markdown/textarea';
import { Sidebar } from 'src/components/sidebar';
import { Button, Layout } from 'src/core';
import { Display, FlexDirection, JustifyContent, Position } from 'src/core/layout/models';
import './style.scss';

interface PublicProps {}

interface State {
  showPreview: boolean;
}

type Props = PublicProps;

export class Editor extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      showPreview: true,
    };
  }

  public render() {
    const buttonState = this.state.showPreview ? '>' : '<';
    return (
      <Layout
        margin={{ x: 1, y: 1 }}
        display={Display.Flex}
        flexDirection={FlexDirection.Row}
        justifyContent={JustifyContent.SpaceAround}
        position={Position.Relative}
      >
        <Sidebar />
        <TextArea />
        {this.state.showPreview && <MarkdownView text={this.global.markdownInput} />}
        <Layout className="mkdn-preview__close-btn" position={Position.Absolute}>
          <Button onClick={this.handleClick}>{buttonState}</Button>
        </Layout>
      </Layout>
    );
  }

  private handleClick = () => {
    this.setState(prevState => ({
      showPreview: !prevState.showPreview,
    }));
  };
}
