import React from 'react'
import Paginate, { ReactPaginateProps } from 'react-paginate'

import './pagination.css'

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
  currentPage: number
  pageCount: number
  onPageChange?: OnPageChangeCallback
}

export const Pagination = ({ currentPage, pageCount, onPageChange }: Props) => {
  return (
    <div className={'issuesPagination pagination'}>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
  )
}
