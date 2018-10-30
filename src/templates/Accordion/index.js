import React from "react";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };
  }

  handleToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return children({ toggle: this.handleToggle, isOpen });
  }
}

Accordion.defaultProps = {
  isOpen: false
};

export default Accordion;
