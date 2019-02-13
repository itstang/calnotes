import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

interface PublicProps {}

type Props = PublicProps;

export class Sidebar extends Component<Props, {}> {
  public render() {
    return <DayPicker />;
  }
}
