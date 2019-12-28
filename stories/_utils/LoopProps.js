import React from 'react';

export default class LoopProps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      intervalId: undefined,
      nextProps: props.loopProps[0],
    };
  }

  componentDidMount = () => {
    const intervalId = setInterval(this.timer, this.props.timer);
    this.setState({ intervalId });
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  render() {

    const childProps = {
      ...this.state.nextProps,
      ...(this.props.staticProps || {})
    };

    return React.cloneElement(
      this.props.children,
      childProps,
    );
  }

  timer = () => {
    const nextProps = this.nextProp();
    this.setState({ currentCount: this.state.currentCount + 1 });
  }

  nextProp = () => {
    const { currentCount } = this.state;
    const { loopProps } = this.props;
    const moduleNum = loopProps.length;
    const nextProps = loopProps[(currentCount % moduleNum)];
    this.setState({ nextProps });
  }
}
