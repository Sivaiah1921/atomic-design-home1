import React from 'react'
import Heading from '../../Atoms/Heading/Heading'

function BannerHeading({text,className,tagName}) {
    return (
        <div>
            <Heading text={text} className={className} tagName={tagName} />
        </div>
    )
}

export default BannerHeading
