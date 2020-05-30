import React from 'react'
import { observer } from 'mobx-react'

import {
   paginationPages,
   disableArrowControlButton
} from '../../../utils/PaginationUtils'
import PageNumberButton from '../../../../common/components/CommonButton/CommonButton'
import { Colors } from '../../../../themes/Colors'
import i18n from '../../../../i18n/strings.json'

import { PaginationWrapper } from './styledComponent'
@observer
class Pagination extends React.Component<{ store: any; hide: any }> {
   handleClick = (event, value) => {
      const { store } = this.props
      if (value === '<') {
         store.handlePaginationButtons(value)
      } else if (value === '>') {
         store.handlePaginationButtons(value)
      } else {
         store.handlePaginationButtons(value)
      }
   }
   render() {
      const { store, hide } = this.props
      const totalPages = store.totalPaginationLimit
      const currentPageNumber = store.currentPageNumber
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
      return (
         <PaginationWrapper data-testid={i18n.paginationTestId} hide={hide}>
            {pageButtons}
         </PaginationWrapper>
      )
   }
}
export { Pagination }
