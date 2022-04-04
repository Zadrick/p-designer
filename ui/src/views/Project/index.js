import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div>
            <h1>hello world</h1>
            <Link to='/library'>Go to Library</Link>
            <Link to="/" className="go-back">Go Back</Link>
        </div>
    )
}

export default Project