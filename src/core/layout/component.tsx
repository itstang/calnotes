import React, { Component } from 'react';
import classNames from 'classnames';
import './style.scss';

interface PublicProps {
  padding?: Padding;
}

type size = 1 | 2 | 3 | 4 | 5;

interface Padding {
  y?: size;
  x?: size;
  t?: size;
  b?: size;
  r?: size;
  l?: size;
  [key: string]: size | undefined;
}

type Props = PublicProps;

export class Layout extends Component<Props> {
  public render() {
    let classes = [];

    for (const key in this.props.padding) {
      classes.push(`p${key}-${this.props.padding[key.toString()]}`);
    }

    const paddingClass = classNames(classes);
    return <div className={paddingClass}>{this.props.children}</div>;
  }
}
