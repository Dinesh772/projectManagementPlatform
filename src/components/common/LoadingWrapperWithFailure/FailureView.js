import React from "react";
import { observer } from "mobx-react";

import {
  FailureViewContainer,
  FailureViewMessage,
  RetryButton
} from "./styledComponents";

@observer
class FailureView extends React.Component {
  renderErrorMessage = error => {
    if (error !== null && error !== undefined) {
      return JSON.parse(error).originalError.message;
    }
    return "Something went wrong please try again";
  };

  render() {
    const { onRetryClick, error } = this.props;

    return (
      <FailureViewContainer>
        <FailureViewMessage>
          {this.renderErrorMessage(error)}
        </FailureViewMessage>
        <RetryButton onClick={onRetryClick}>Retry</RetryButton>
      </FailureViewContainer>
    );
  }
}

export default FailureView;
