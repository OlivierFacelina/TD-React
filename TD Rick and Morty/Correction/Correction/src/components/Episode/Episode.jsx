import React, { useEffect, useState } from 'react'

export default function Episode({links = []}) {

    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const results = []
        for (const link of links) {
            fetch(link)
            .then(res => res.json())
            .then(data => {
            //    results.push(data)
               setEpisodes(e => [...e, {episode: data.episode, air_date: data.air_date}])
            })
        }
        setLoading(false)

        // const bootstraAsync = async () => {
        //     let responses = [];
        //     links.forEach(async (link) => {
        //         const res = await fetch(link)
        //         responses.push(res);
        //     });
        //     console.log("test")
        //     const results = await Promise.all(responses)
        //     console.log(results)
        // }

        // bootstraAsync();

    }, [])
    console.log("test", episodes)
  return (
    !loading && (
    <ul>
        { 
        episodes.map(episode => 
        <li key={episode.id}>
            <span>{episode.episode}</span> - 
            <span>{episode.air_date}</span>
        </li>
        )}
    </ul>
    )
  )
}
