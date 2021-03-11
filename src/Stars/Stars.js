import React from 'react'
import "./Stars.css"

const Stars = ({row}) => {
    const stars = [1,2,3,4,5];
    return(
        <div className="rate">
            {
                stars.map((star,i) => {
                    return(
                        <React.Fragment key={i}>
                            <input type="checkbox" id={`star${star}-${row.id}`} name="rate" value={`${star}-${row.id}`}/>
                            <label htmlFor={`star${star}-${row.id}`} title="text">{star}-{row.id} stars</label>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Stars