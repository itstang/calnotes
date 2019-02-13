import React, { Component } from 'react';
import './style.scss';

interface PublicProps {
  className?: string;
  onClick?: () => void;
}

type Props = PublicProps;

export class Button extends Component<Props> {
  public render() {
    return (
      <button className='btn' onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
