import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as util from '../../helpers/util';

/** TooltipTrigger component description */
class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      placement: props.placement
    };
    this.timer = null;
  }

  handleMouseEnter = () => {
    this.mountTooltip();
  }

  handleMouseLeave = () => {
    this.unmountTooltip();
  }

  handleMouseDown = () => {
    
  }

  handleClick = () => {
    this.unmountTooltip();
  }

  setPosition = (placement, tooltip, target) => {
    let stylePosition = util.getPlacementPosition(placement, tooltip, target);
    tooltip.style.top = "0px";
    tooltip.style.left = "0px";
    tooltip.style.transform = `translate3d(${stylePosition.left}, ${stylePosition.top}, 0px)`;
    this.setState({
      placement: this.props.placement
    })
  }

  mountTooltip = () => {
    clearTimeout(this.timer);

    const existingElement = document.getElementById(this.props.id);
    const wrapper = ReactDOM.findDOMNode(this);

    if (existingElement) {
      existingElement.classList.add("show");
      return;
    } else {
      // Create fake tooltip to get bounding rect
      const parent = document.body;
      const tooltipElement = this.props.tooltip;
      let tooltipWrapper = document.createElement("div");
      tooltipWrapper.className = "tooltip__wrapper tooltip__wrapper--fake";
      tooltipWrapper.id = this.props.id;

      ReactDOM.render(tooltipElement, tooltipWrapper);
      parent.appendChild(tooltipWrapper);

      const newPlacement = util.getPlacement(this.state.placement, tooltipWrapper, wrapper);
      this.setState({
        placement: newPlacement
      }, () => {
        // Remove fake tooltip
        const existingElement = document.getElementById(this.props.id);
        util.removeElement(existingElement);

        // Create original tooltip
        const parent = document.body;
        const tooltipElement = this.props.tooltip;
        let tooltipWrapper = document.createElement("div");
        tooltipWrapper.className = "tooltip__wrapper";
        tooltipWrapper.id = this.props.id;
        const clonedTooltip = React.cloneElement(
          tooltipElement,
          { placement: this.state.placement }
        );
        ReactDOM.render(clonedTooltip, tooltipWrapper);
        parent.appendChild(tooltipWrapper);

        setTimeout(() => {
          tooltipWrapper.classList.add("show");
          this.setPosition(this.state.placement, tooltipWrapper, wrapper);
        }, 10);
      });
    }
  }

  unmountTooltip = () => {
    let existingElement = document.getElementById(this.props.id);
    if (existingElement) {
      existingElement.classList.remove('show');
      this.timer = setTimeout(() => {
        const unmounted = ReactDOM.unmountComponentAtNode(existingElement);
        if (unmounted) {
          util.removeElement(existingElement);
        }
      }, 200);
    }
  }

  render() {
    // const x = {onMouseOver: this.handleMouseEnter};
    // const props = {...x, ...this.props};
    const { placement } = this.state;
    const {
      className,
      tooltip,
      children,
    } = this.props;

    // Add event handler
    let eventList;
    if (tooltip) {
      eventList = {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleMouseLeave
      };
    }

    const clonedElement = React.cloneElement(
      children,
      { ...eventList }
    );

    // const props = {
    //   ...x, 
    //   placement, 
    //   className, 
    //   tooltip
    // };

    // console.log(this.props)
    // console.log(props)

    return (clonedElement);
  }
}

TooltipTrigger.defaultProps = {
  placement: "top",
  event: "hover",
  show: false
}

TooltipTrigger.propTypes = {
  placement: PropTypes.string,
  event: PropTypes.string,
  show: PropTypes.bool,
  tooltip: PropTypes.element
}

export default TooltipTrigger;