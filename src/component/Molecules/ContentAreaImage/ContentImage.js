import React from 'react'
import Image from '../../Atoms/Image/Image'

const ContentImage = ({srcImg,altText}) =>{
    return (
        <div>
            <Image srcImg={srcImg} altText={altText}/>
        </div>
    )
}

export default ContentImage
