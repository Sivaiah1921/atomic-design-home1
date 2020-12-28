import React from 'react'
import EpisodeContent from '../../Molecules/EpisodeContent/EpisodeContent'
import EpisodeCollection from '../../Molecules/EpisodeCollection/EpisodeCollection'
import PosterShowCollection from '../../Molecules/PosterShowCollection/PosterShowCollection'
import EpisodeData from '../../../config/EpisodeData'
import PosterData from '../../../config/PosterData'
import './ContentArea.css'
import Image from '../../Atoms/Image/Image'
// continue collection   from Molecules
// recommended collection from Molecules

/**
 * ContentArea component
 */
function ContentArea() {
    return (
        <div>
            <EpisodeContent className="episodeContent" text="Continue Watching" />
            <div  className="collection">
               <div className="slider-lf"> <Image srcImg='./images/leftslider.svg' altText='slider'/></div>
                    {EpisodeData.map(item => {
                        return  <EpisodeCollection key={item.iconName}  item={item.iconName} />
                             
                    } )}
                <div className="slider-rg"><Image srcImg='./images/rightSlider.svg' altText='slider'/></div> 
            </div>
            <EpisodeContent className="episodeContent" text="Recommenended For You"/>
            <div className="collection-1">
                    {PosterData.map(item => {
                        return  <PosterShowCollection  key={item.iconName}  item={item.iconName} />
                               
                    } )}
            </div>  
        </div>
    )
}

export default ContentArea
