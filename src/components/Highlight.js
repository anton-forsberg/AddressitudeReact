import React from 'react'

const Highlight = ({ text, regex }) => {
    if (!regex) return ( <>{text}</> );

    const html = text.replace(regex, '<mark>$&</mark>')

    return (
        <span dangerouslySetInnerHTML={{__html: html}}></span>
    )
}

export default Highlight
