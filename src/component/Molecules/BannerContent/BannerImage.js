import React from 'react'
import Image from '../../Atoms/Image/Image'
function BannerImage({srcImg,altText,className}) {
    return (
        <div>
            <Image srcImg={srcImg} altText={altText} className={className} />
        </div>
    )
}

export default BannerImage
