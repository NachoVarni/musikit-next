import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const authorizePage = `https://accounts.spotify.com/authorize`
  const clientId = `3e89183934de45acb276bdab617da2dd`
  const response = `token`
  const redirectUri = `http://localhost:3000/dashboard`
  const redirectUri2 = 'https://musikit-nachovarni.vercel.app/dashboard'

  const scopes = `user-read-recently-played,user-read-recently-played` 
  
  return (
    <div className={styles.App}>
      
      <div className={styles.loginWrapper}>
        <a href={`${authorizePage}?client_id=${clientId}&response_type=${response}&redirect_uri=${redirectUri}&scope=${scopes}`}>
          Entrar a Musikit
        </a>
      </div>
      
    </div>
  );
}
