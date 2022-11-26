import { useRouter } from 'next/router'
import { results } from '../../types'
import * as S from './styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Component } from 'react';
type props = { 
  similars : results[]
}
const Similars = ({similars}:props) => {
const router = useRouter()


const Unit = similars.map((e)=>{
  const img = `https://image.tmdb.org/t/p/original/${e.poster_path}`
  const lnk = {
    pathname:`/details/${e.title}`,
    query: e
  }
  return(
    <div key={e.id}>
    <S.Behind>
      <S.Button onClick={()=>{router.push(lnk)}} >See more</S.Button>
    </S.Behind>
    <S.Img src={img}/>
    </div>
  )
})

class Sliders extends Component{
  render(){
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToScroll:1,
      touchMove:true,
      swipeToSlide:true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    }
    return(
      <Slider{...settings}>
      {Unit}
      </Slider>
    )
  }
}


return(
  <S.Wrapper>
    <h1>Similars</h1>
    <Sliders/>
  </S.Wrapper>
)
}
export default Similars