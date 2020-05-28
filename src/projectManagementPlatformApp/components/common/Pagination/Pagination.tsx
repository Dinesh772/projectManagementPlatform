import React from 'react'
import { PaginationWrapper } from './styledComponent'
import {
   paginationPages,
   disableArrowControlButton
} from '../../../utils/PaginationUtils'
import PageNumberButton from '../../../../common/components/CommonButton/CommonButton'
import { Colors } from '../../../../themes/Colors'
import { observer } from 'mobx-react'
@observer
class Pagination extends React.Component<{ projectStore: any; hide: any }> {
   handleClick = (event, value) => {
      const { projectStore } = this.props
      if (value === '<') {
         projectStore.handlePaginationButtons(value)
      } else if (value === '>') {
         projectStore.handlePaginationButtons(value)
      } else {
         projectStore.handlePaginationButtons(value)
      }
   }
   render() {
      const { projectStore, hide } = this.props
      const totalPages = projectStore.totalPaginationLimit
      const currentPageNumber = projectStore.currentPageNumber
      const pageNumbers = paginationPages(totalPages, currentPageNumber)
      const pageButtons = pageNumbers.map(each =>
         each !== '....' ? (
            <PageNumberButton
               isDisabled={disableArrowControlButton(
                  each,
                  currentPageNumber,
                  totalPages
               )}
               buttonValue={each}
               key={each}
               height={'30px'}
               handleClick={this.handleClick}
               width={'30px'}
               bgColor={Colors.white}
               borderColor={Colors.lightBlueGrey}
               textColor={Colors.darkBlueGrey}
            />
         ) : (
            each
         )
      )
      return <PaginationWrapper hide={hide}>{pageButtons}</PaginationWrapper>
   }
}
export { Pagination }
