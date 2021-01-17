import styles from './UserData.module.scss'

export default function UserData({userData}) {
  
  

  return(
    <div className={styles.userWrapper}>
      {/* <img src={userData.images[0].url} className={styles.userImg} /> */}
      <p className={styles.user}>Welcome {userData.display_name}</p>
    </div>
  )
}