import * as S from './styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { results } from '../../types';
import { Component, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import router from 'next/router';

type props={
  data:results[]
}
const TopRated = ({data}:props) => {
   const imgLink = 'https://image.tmdb.org/t/p/original/'
   
  
   const Movies= data.map((e)=>{
   const img = `${imgLink}${e.poster_path}`
   const lnk = {
    pathname:`/details/${e.title}`,
    query: e
  }
        return (
        <div key={e.id}>
        <S.MovieContent  >
          <h3>{e.title}</h3>
          <p>Avaliation: {e.vote_average}</p>

          <S.Button onClick={()=>router.push(lnk)} >See More</S.Button>
        </S.MovieContent>
        <S.Img  src={img} />
        </div>
    )
  })

 class Carroucel extends Component{
  render(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow:6,
    touchMove:true,
    useCSS:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    swipeToSlide:true,
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          height:'5px'
        }}
      >
        <ul style={{ 
          margin: "0px",
          maxWidth:'700px',
          backgroundColor: "rgb(221,221,221,0.5)",
          marginLeft:'auto',
          marginRight:'auto',
          borderRadius:'50px',
          
          }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots:false
        }
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        }
      }
      
    ]
  };
return(
<Slider{...settings}> 
{Movies}
</Slider>
)
}

}


  return(
    <>
    <S.Wrapper>
    <S.Title>TOP RATED</S.Title>
    <Carroucel/>
    </S.Wrapper>
    </>
  )
}

export default TopRated