import {useRouter} from 'next/router'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './listen.module.scss'

export default function listen() {
  
  const location = useRouter()
  const path = location.asPath
  const fullHash = path.split('/')
  const id = fullHash[2]
  console.log(id)
  const [trackName, setTrackName] = useState([])
  const [img, setImg] = useState('')
  const [album, setAlbum] = useState('')
 
  async function fetchTrack() {
    const data = await Axios.get(`https://api.spotify.com/v1/tracks/${id}`,
      {  
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(data.data)
    setTrackName(data.data.name)
    setImg(data.data.album.images[0].url)
    setAlbum(data.data.album.name)
  }

  useEffect(() => {
    fetchTrack()
  }, [])

  
  return(
    
    <div className={styles.main}>
      
      <div className={styles.wrapper}>
        <img src={img} className={styles.img} />
        <h3>{trackName}</h3>
        <h3>{album}</h3>
      </div>
      
    </div>
  )
}