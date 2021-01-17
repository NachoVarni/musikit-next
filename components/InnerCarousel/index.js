import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './InnerCarousel.module.scss'
import Link from 'next/link'

export default function InnerCarousel({carouselData}) {
  
  

  return (
    <div className="App">
      <Slider 
        dots={false}
        slidesToShow={4}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}

        responsive = {[
          {
            breakpoint: 812,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false
            }
          }
        ]}
        
      >
        {carouselData.map((track, key) => {
          
          return(
            <Link href={`/playing/${track.type}/${track.id}`} key={key}>
              <div className={styles.wrapper} >
              
                
                {track.images && <img src={track.images[0].url} className={styles.carouselPic} />}
                {track.album && <img src={track.album.images[0].url} className={styles.carouselPic} />}
                <h3 className={styles.title}>{track.name}</h3>
                <h3 className={styles.desc}>{track.description}</h3>
                {/* {track.artists && track.artists.map((artist) => {
                  return(
                    <h3 className={styles.desc}>{artist}</h3>
                  )
                })} */}
                

              </div>
            </Link>
          )
        })}
      </Slider>
    </div>
  );
  
}

