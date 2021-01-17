
import styles from './carousel.module.scss'
import InnerCarousel from '../InnerCarousel'

export default function Carousel({carouselData, carouselTitle}) {
  
  
  
  return(
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{carouselTitle}</h2>
      
      <InnerCarousel carouselData={carouselData} />
      
    </div>  
  )
}