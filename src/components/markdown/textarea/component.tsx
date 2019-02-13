import React, { Component } from 'reactn';
import './style.scss';

export class TextArea extends Component {
  public render() {
    return (
      <textarea
        className="mkdn-textarea"
        value={this.global.markdownInput}
        onChange={this.handleChange}
        autoFocus
      />
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setGlobal({
      markdownInput: event.target.value,
    });
  };
}
