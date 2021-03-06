import React from 'react'

const Header = (props) => {
    return (
        <div className="headerContainer">
            <div className = "innerHeader">
                <h3 id="jobStatus">Job Status: <span id={`jobStatus${props.status}`}>{props.status}</span></h3>
                <h3>Daniel's Coronavirus Job Search</h3>
                <h3 id="date">Last Updated: {props.date}</h3>
            </div>
            <div className="smallHead">
                <h3 id="jobStatus">Job Status: <span id={`jobStatus${props.status}`}>{props.status}</span></h3>
                <h3 id="date">Last Updated: {props.date}</h3>
            </div>
        </div>
    )
}


export default Header