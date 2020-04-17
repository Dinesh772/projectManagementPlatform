import React, { Component } from "react";

class Loader extends Component {
  static defaultProps = {
    width: 100,
    height: 100,
    fill: "#00BFFF"
  };

  render() {
    const { width, height, fill } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        aria-label="audio-loading"
      >
        <circle cx={15} cy={15} r="12.2657">
          <animate
            attributeName="r"
            from={15}
            to={15}
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fillOpacity"
            from={1}
            to={1}
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={60}
          cy={15}
          r="11.7343"
          attributeName="fillOpacity"
          from={1}
          to="0.3"
        >
          <animate
            attributeName="r"
            from={9}
            to={9}
            begin="0s"
            dur="0.8s"
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fillOpacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur="0.8s"
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={105} cy={15} r="12.2657">
          <animate
            attributeName="r"
            from={15}
            to={15}
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fillOpacity"
            from={1}
            to={1}
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
  }
}

export default Loader;
