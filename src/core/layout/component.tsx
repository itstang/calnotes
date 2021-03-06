import classNames from 'classnames';
import React, { Component } from 'react';
import {
  AlignContent,
  AlignItems,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Position,
} from './models';
import './style.scss';

interface PublicProps {
  className?: string;
  padding?: Padding;
  margin?: Margin;
  display?: Display;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  position?: Position;
}

interface Spacing {
  y?: size;
  x?: size;
  t?: size;
  b?: size;
  r?: size;
  l?: size;
  [key: string]: size | undefined;
}

type size = 1 | 2 | 3 | 4 | 5;
type Padding = Spacing;
type Margin = Spacing;
type Props = PublicProps;

export class Layout extends Component<Props> {
  public render() {
    const paddingClass = classNames([
      this.props.className,
      ...this.getPadding(),
      ...this.getMargin(),
      this.props.display,
      this.props.flexDirection,
      this.props.flexWrap,
      this.props.justifyContent,
      this.props.alignItems,
      this.props.alignContent,
      this.props.position,
    ]);
    return <div className={paddingClass}>{this.props.children}</div>;
  }

  private getPadding() {
    const classes = [];
    for (const key in this.props.padding) {
      if (this.props.hasOwnProperty(key)) {
        classes.push(`p${key}-${this.props.padding[key.toString()]}`);
      }
    }
    return classes;
  }

  private getMargin() {
    const classes = [];
    for (const key in this.props.margin) {
      if (this.props.hasOwnProperty(key)) {
        classes.push(`m${key}-${this.props.margin[key.toString()]}`);
      }
    }
    return classes;
  }
}
