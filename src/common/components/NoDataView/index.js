import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";
import i18n from '../../../i18n/strings.json'
class NoDataView extends React.Component {
  render() {
    return (
      <NoDataViewContainer>
        <NoDataViewText>{this.props.text??i18n.noDataText}</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
