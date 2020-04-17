import React from "react";
import { observer } from "mobx-react";

import {
  FailureViewContainer,
  FailureViewMessage,
  RetryButton
} from "./StyledComponents";

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
        <RetryButton
          onClick={onRetryClick}
          className="px-8 py-2 bg-blue-500 text-white text-2xl rounded"
        >
          Retry
        </RetryButton>
      </FailureViewContainer>
    );
  }
}

export default FailureView;
