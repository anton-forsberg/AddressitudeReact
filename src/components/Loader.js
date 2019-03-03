import React from 'react'
import loader from '../assets/loader.svg';

const Loader = ({ loading }) => {
    return (
        <div className={'full-page-loader ' + (!loading && 'hidden')}>
            <img src={loader} alt="loader"/>
        </div>
    )
}

export default Loader
