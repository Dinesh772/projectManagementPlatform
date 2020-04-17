import React from "react";
import { observer } from "mobx-react";

import { API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";

import LoadingView from "./LoadingView";
import FailureView from "./FailureView";

@observer
class LoadingWrapperWithFailure extends React.Component {
  render() {
    const { loadingState, children, onRetryClick, error } = this.props;

    switch (loadingState) {
      case API_FETCHING:
        return <LoadingView />;
      case API_SUCCESS:
        return children;
      case API_FAILED:
        return <FailureView onRetryClick={onRetryClick} error={error} />;
      default:
        return null;
    }
  }
}

export default LoadingWrapperWithFailure;
