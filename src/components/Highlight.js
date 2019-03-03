import React from 'react'

const Highlight = ({ text, highlight }) => {
    if (!highlight) return ( <span>{text}</span> );

    const html = text.replace(new RegExp(highlight, 'gi'), '<mark>$&</mark>');

    return (
        <span dangerouslySetInnerHTML={{__html: html}}></span>
    )
}

export default Highlight
