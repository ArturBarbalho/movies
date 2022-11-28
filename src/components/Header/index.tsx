import * as S from './styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { genres, results } from '../../types';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { useRouter } from 'next/router';

type props = {
  data : results[]
  genres:genres[]
}
const Header = ({data,genres}:props) => {
  const router = useRouter()
    const imgLink = 'https://image.tmdb.org/t/p/original/'

    const imgs = data.slice(10,15).map((e)=>{
      const n = `${imgLink}${e.backdrop_path}`
     const genr = genres.filter((n)=>{
      return e.genre_ids.find(id=>id==n.id)
     })
     
     const nameGen = genr.map((name)=>{
      return(
        <S.Genre key={name.id} >{name.name}</S.Genre> 
        )
     })

     
     const lnk = {
      pathname:`/details/${e.title}`,
      query: e
    }
      return(
        <div key={e.id} >
        <S.MovieInfo>
          <div>{nameGen}</div>
          <S.Title>{e.title.toUpperCase()}
          <span>({e.release_date.slice(0,4)})</span> 
          </S.Title> 
          <S.Icon>
          <img src='icon1.png' />
          <img src='icon2.png'/>
          <img src='icon3.png'/>
          <img src='icon4.png'/>
          </S.Icon>
          <S.Overview>{e.overview.slice(0,200)+'...'}
          </S.Overview>

          <S.Button onClick={()=>{router.push(lnk)}} >See more</S.Button>

        </S.MovieInfo>
        <img style={{width:'100%',height:'95vh',objectFit:'cover'}} src={n} alt="" />
        </div>

      )
    })

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
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
            height:'1px'
          }}
        >
          <ul style={{ 
            margin: "0px",
            maxWidth:'200px',
            backgroundColor: "white",
            marginLeft:'auto',
            marginRight:'auto',
            borderRadius:'50px',
            
            }}> {dots} </ul>
        </div>
      ),
    };
    return(
      <S.Wrapper >
      <Slider {...settings}>
        {imgs}
      </Slider>
      </S.Wrapper>
    )
  }

export default Header