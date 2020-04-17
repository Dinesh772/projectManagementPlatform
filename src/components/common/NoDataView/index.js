import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./StyledComponents";

class NoDataView extends React.Component {
  render() {
    return (
      <NoDataViewContainer>
        <NoDataViewText>No data found!</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
