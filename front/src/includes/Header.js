import React, {Fragment} from 'react'

function Header({ title, description, className, children }) {
    return (
        <Fragment>
            <div className="jumbotron">
                <h1 className="display-4"> {title} </h1>
                <p className="lead"> {description} </p>
            </div>
            <div className={className}> {children} </div>
        </Fragment>
    )
}

export default Header
