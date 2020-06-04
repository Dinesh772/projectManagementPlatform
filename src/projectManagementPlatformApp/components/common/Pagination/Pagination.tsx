import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import ReactPaginate from 'react-paginate'

import i18n from '../../../../i18n/strings.json'
import Avatar from '../../../../Common/components/Avatar/Avatar'

import { PaginationWrapper } from './styledComponent'
@observer
class Pagination extends React.Component<{
   handlePaginationButtons: any
   hide: any
   currentPageNumber: any
   totalPages: any
}> {
   @observable count = 0
   handleClick = event => {
      let selectedPage = event.selected
      const { handlePaginationButtons } = this.props
      this.count = this.count + 1
      if (this.count !== 1) {
         handlePaginationButtons(selectedPage + 1)
      }
   }
   render() {
      const { currentPageNumber, totalPages, hide } = this.props
      const totalPageCount = totalPages
      const currentPage = currentPageNumber

      return (
         <PaginationWrapper data-testid={i18n.paginationTestId} hide={hide}>
            <ReactPaginate
               breakLabel={'...'}
               pageCount={totalPageCount}
               previousLabel={
                  <Avatar
                     path={i18n.paginationLeftArrowUrl}
                     height={'22px'}
                     width={'15px'}
                  />
               }
               nextLabel={
                  <Avatar
                     path={i18n.paginationRightArrowUrl}
                     height={'22px'}
                     width={'15px'}
                  />
               }
               initialPage={0}
               pageRangeDisplayed={2}
               marginPagesDisplayed={2}
               onPageChange={this.handleClick}
               containerClassName={'pagination'}
               subContainerClassName={'pages pagination'}
               activeClassName={'active'}
               breakClassName={'break-me'}
               forcePage={currentPage - 1}
            />
         </PaginationWrapper>
      )
   }
}
export { Pagination }
