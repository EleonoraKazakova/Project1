import React, {useState} from 'react'

import Slider from './Slider'
import Preview from './Preview'
import './Gallery.css'

function Gallery ({photos}){
    
    const [currentPhoto, setCurrentPhoto] = useState(0)

    return <div>
        <Slider 
        photos = {photos}
        currentPhoto = {currentPhoto}
        setCurrentPhoto = {setCurrentPhoto}
        />
    

    <div className='gallery'>
        <Preview 
        photos = {photos}
        currentPhoto = {currentPhoto}
        setCurrentPhoto = {setCurrentPhoto}
        />
    </div>
    </div>
}


export default Gallery
