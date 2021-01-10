import React from 'react'
import Pagination from "react-js-pagination";
const PaginationBar = (props) => {
    return (
        <div className="d-flex justify-content-center">
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