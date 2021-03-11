import React, {useState} from "react"
import './homePage.css'
import {useHistory} from "react-router";


const HomePage = () => {
    const [value, setValue] = useState('')
    const history = useHistory()

    function handleClick() {
        if (value) {
            history.push(`/search?page=1&repository=${value}`)
        }
    }

    return (
        <div className="background">
            <div className="container">
                <div className="row flex-column justify-content-center align-items-center text-center">
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <h2 id="greeting">Good Morning, User.</h2>
                        <h3>Which Repository do you want to search?</h3>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 col-lg-6">
                        <div className="input-group">
                            <input
                                type="text"
                                name="q"
                                onChange={(e) => setValue(e.target.value)}
                                onKeyPress={event => event.key === "Enter" ? handleClick() : null}
                                className="form-control custom-input"/>
                            <span className="input-group-btn">
                                <button
                                    onClick={handleClick}
                                    className="btn btn-custom"
                                >
                                    Search
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage