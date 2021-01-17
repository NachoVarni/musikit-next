import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './innerRecentPlayed.module.scss'

export default function InnerCarousel({carouselData}) {
  
  

  return (
    <div className="App">
      <Slider 
        dots={false}
        slidesToShow={4}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
      >
        {carouselData.map((track, key) => {
          return(
          
            <div key={key}>
              
              <h3>{track.track.name}</h3>)
              <img src={track.track.album.images[0].url} className={styles.carouselPic} />
              
            </div>
            
        )
      })}
      </Slider>
    </div>
  );
  
}
