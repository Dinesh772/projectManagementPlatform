export function paginationPages(totalPages, currentPageNumber) {
   let pageNumbers: any = []
   if (totalPages > 4) {
      pageNumbers.push('<')
      for (
         let i = currentPageNumber;
         i <= currentPageNumber + 1 && i < totalPages - 1;
         ++i
      ) {
         pageNumbers.push(i)
      }
      pageNumbers.push('....')
      for (let i = totalPages - 2; i < totalPages; ++i) {
         pageNumbers.push(i)
      }

      pageNumbers.push('>')
   } else if (totalPages <= 4) {
      pageNumbers.push('<')
      for (let i = 1; i <= totalPages; ++i) {
         pageNumbers.push(i)
      }
      pageNumbers.push('>')
   }
   return pageNumbers
}

export function disableArrowControlButton(
   value,
   currentPageNumber,
   totalPages
) {
   if (value === '<' && currentPageNumber === 1) {
      return true
   } else if (value === '>' && currentPageNumber === totalPages) {
      return true
   } else {
      return false
   }
}
