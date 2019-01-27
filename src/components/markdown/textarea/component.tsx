import React, { Component } from 'reactn';

export class TextArea extends Component {
  private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setGlobal({
      markdownInput: event.target.value,
    });
  };

  public render() {
    return (
      <textarea
        value={this.global.markdownInput}
        onChange={this.handleChange}
      />
    );
  }
}
