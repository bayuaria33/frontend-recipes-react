import React from 'react'

export default function Pagination({page,numFrom,numTo,total,pagePrevious,pageNext}) {
  return (
    <div className="col text-center text-content mt-3">
    {page > 1 && (
      <button
        onClick={pagePrevious}
        className="btn btn-warning mx-3 text-white"
      >
        Previous
      </button>
    )}
    Show {numFrom} - {numTo} from {total}
    
    {numTo < total && (
      <button
        onClick={pageNext}
        className="btn btn-warning mx-3 text-white"
      >
        Next
      </button>
    )}
  </div>
  )
}
