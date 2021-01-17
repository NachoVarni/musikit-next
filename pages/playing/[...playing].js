import Axios from "axios"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import styles from './playing.module.scss'
import Link from 'next/link'

export default function playing() {
  
  const location = useRouter()
  const path = location.asPath
  const fullHash = path.split('/')
  
  const type = fullHash[2]
  const id = fullHash[3]
  const [newReleased, setNewReleased] = useState([])
  const [playlist, setPlaylist] = useState([])
  
  async function fetchTrack() {
    if (type == 'album' || type == 'playlist') {
    const data = await Axios.get(`https://api.spotify.com/v1/${type}s/${id}`,
      {  
        headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`
         }
      })
    console.log(data.data)
    setNewReleased(data.data.tracks.items)
    // setPlaylist(data.data.tracks.items)
    }
    else if (type == 'artist') {
      const data = await Axios.get(`https://api.spotify.com/v1/${type}s/${id}/top-tracks?market=ES`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(data.data.tracks)
      setNewReleased(data.data.tracks)
    }
    else if (type == 'track') {
      const data = await Axios.get(`https://api.spotify.com/v1/${type}s/${id}/`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(data.data)
      setNewReleased(data.data)
    }

  }

  useEffect(() => {
    fetchTrack()
  }, [])

  
  return(
    <div className={styles.main}>
      {newReleased.type != 'track' 
        ?
          newReleased.map((song, key) => {
            if (song.track) 
              return(
                <div key={key} className={styles.wrapper}>
                  <Link href={`/listen/${song.track.id}`}><h3 className={styles.name}>{song.track.name}</h3></Link>
                </div>
              )
            else 
              return(
                <div key={key} className={styles.wrapper}>
                  <Link href={`/listen/${song.id}`}><h3 className={styles.name}>{song.name}</h3></Link>
                </div>
              )
          })
        :
          <div className={styles.wrapper}>
            <Link href={`/listen/${newReleased.id}`}><h3 className={styles.name}>{newReleased.name}</h3></Link>
          </div>
          
      }
      

    </div>
  )
}


