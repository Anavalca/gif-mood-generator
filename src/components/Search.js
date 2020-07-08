import React, { useState, useEffect } from 'react';



export default function GifsList({ params }) {

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