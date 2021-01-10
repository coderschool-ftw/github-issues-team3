import React from 'react'
import Pagination from "react-js-pagination";
const PaginationBar = (props) => {
    return (
        <div>
           <Pagination
                totalItemsCount={props.totalIssuesCount}
                activePage={props.currentPage}
                itemsCountPerPage={props.issuesPerPage}
                onChange={props.clicked}
                pageRangeDisplayed={3}
                itemClass={'page-item'}
                linkClass={'page-link'}
            />
        </div>
    )
}

export default PaginationBar