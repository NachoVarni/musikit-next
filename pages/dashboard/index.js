import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Carousel from '../../components/carousel'
import UserData from '../../components/UserData'
import RecentPlayedCarousel from '../../components/RecentPlayedCarousel'
import styles from './dashboard.module.scss'

export default function Dashboard() {

  const [rockPlaylists, setRockPlaylists] = useState([])
  const [newReleased, setNewReleased] = useState([])
  const [userData, setUserData] = useState([])
  const [topArtists, setTopArtists] = useState([])
  const [topTracks, setTopTracks] = useState([])
  const location = useRouter()
  const path = location.asPath
  const [fullHash] = path.split('&')
  const [, accessToken] = fullHash.split('=')
  
  if (typeof window !== "undefined") {
    localStorage.clear()
    localStorage.setItem('token', accessToken)
    
  }


  async function fetchUserData() {
    const data = await Axios.get("https://api.spotify.com/v1/me",
      {  
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    setUserData(data.data)
  }

  async function fetchNewReleased() {
    const data = await Axios.get("https://api.spotify.com/v1/browse/new-releases?country=AR&limit=10",
      {  
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    console.log(data.data.albums.items)
    setNewReleased(data.data.albums.items) 
  }

  async function fetchRockPlaylists() {
    const data = await Axios.get("https://api.spotify.com/v1/browse/categories/rock/playlists?country=AR&limit=10",
      {  
        headers: {
          'Authorization': `Bearer ${accessToken}`
      }
    })
    console.log(data.data.playlists.items)
    setRockPlaylists(data.data.playlists.items) 
  }

  async function fetchTopArtists() {
    const data = await Axios.get("https://api.spotify.com/v1/me/top/artists",
      {  
        headers: {
          'Authorization': `Bearer ${accessToken}`
      }
    })
    setTopArtists(data.data.items) 
  }

  async function fetchTopTracks() {
    const data = await Axios.get("https://api.spotify.com/v1/me/top/tracks",
      {  
        headers: {
          'Authorization': `Bearer ${accessToken}`
      }
    })
    console.log(data.data.items)
    setTopTracks(data.data.items)
  }

  // async function fetchRecentlyPlayed() {
  //   const data = await Axios.get("https://api.spotify.com/v1/me/player/recently-played",
  //     {  
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`
  //     }
  //   })
  //   setRecentlyPlayed(data.data.items)
     
  // }

  useEffect(() => {
    fetchNewReleased()
    fetchRockPlaylists()
    fetchUserData()
    fetchTopArtists()
    // fetchRecentlyPlayed()
    fetchTopTracks()
  }, [])
  
  
  return(
    <div className={styles.wrapper}>
      <UserData userData={userData} />
      <div className={styles.carouselWrapper}>
        <Carousel carouselData={newReleased} carouselTitle='Nuevos lanzamientos' />
        <Carousel carouselData={rockPlaylists} carouselTitle='Playlists de Rock' />
        <Carousel carouselData={topArtists} carouselTitle='Artistas favoritos' />
        <Carousel carouselData={topTracks} carouselTitle='Temas favoritos' />
      </div>
      
    </div>
  )
}
