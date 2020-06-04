import React from 'react'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'

import i18n from '../../../../i18n/strings.json'

import { PaginationWrapper } from './styledComponent'
import { observable } from 'mobx'
import Avatar from '../../../../Common/components/Avatar/Avatar'
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
            {/* {pageButtons} */}
            <ReactPaginate
               breakLabel={'...'}
               pageCount={totalPageCount}
               previousLabel={
                  <Avatar
                     path={
                        'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/611ee159-43c6-4622-b2df-46dbd81d2c7f.svg'
                     }
                     height={'22px'}
                     width={'15px'}
                  />
               }
               nextLabel={
                  <Avatar
                     path={
                        'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/aaf4eaf1-5200-47b0-b7c4-8ccf72afdb45.svg'
                     }
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
