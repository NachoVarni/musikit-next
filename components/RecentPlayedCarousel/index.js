import InnerRecentPlayed from '../InnerRecentPlayed'

export default function RecentPlayedCarousel({carouselData, carouselTitle}) {
  
  console.log(carouselTitle)
  return(
    <>
      <h2>{carouselTitle}</h2>
      
      <InnerRecentPlayed carouselData={carouselData} />
      
    </>  
  )
}