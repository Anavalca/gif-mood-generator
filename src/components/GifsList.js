import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';


export default function GifsList({ params }) {
    const { keyWord } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyWord })
            .then(gifs =>
                setGifs(gifs))
        setLoading(false)
    }, [keyWord])

    if (loading) return <div>Hola</div>

    return <div>
        {
            gifs.map(singleGif =>
                <Gif
                    key={singleGif.id}
                    title={singleGif.title}
                    url={singleGif.url}
                    id={singleGif.id}
                />
            )
        }
    </div>
}