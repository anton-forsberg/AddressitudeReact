import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackButton = (props) => {
    return (
        <Link to="/contacts" className="back-link">
            <FontAwesomeIcon icon="angle-left" />
            Back
        </Link>
    )
}

export default withRouter(BackButton);