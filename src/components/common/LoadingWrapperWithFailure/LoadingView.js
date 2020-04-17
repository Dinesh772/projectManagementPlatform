import React from "react";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./StyledComponents";

class LoadingView extends React.Component {
  render() {
    return (
      <LoadingViewContainer>
        <Loader />
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;
