import * as S from './styles'
import { genres, results } from '../../types/index';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Component } from 'react';
import router from 'next/router';
type props = {
  data: results[]
  genres:genres[]
}
const UpComing = ({data,genres}:props) => {
  const imgLink = 'https://image.tmdb.org/t/p/original/'

      const Movies = data.map((e)=>{
                const bigImg = `${imgLink}${e.backdrop_path}`
                const smallImg = `${imgLink}${e.poster_path}`

                const genr = genres.filter((n)=>{
                  return e.genre_ids.find(id=>id==n.id)
                })
                
                const nameGen = genr.map((name)=>{
                  return(
                    <div key={name.id} >{name.name}</div> 
                    )
                })
                const lnk = {
                  pathname:`/details/${e.title}`,
                  query: e
                }
                return(
                <div key={e.id}>
                <S.Back src={bigImg} />
                <S.Cont>  
                   <S.Poster src={smallImg} />  
                  <div>               
                   <S.Genres>{nameGen}</S.Genres>  
                   <S.Description>{e.overview}</S.Description> 
                   <S.Btn><S.Button  onClick={()=>router.push(lnk)}>See more</S.Button></S.Btn>
                   
                  </div>                                                   
                </S.Cont>
                </div>
                )
              })

         class Carroucel extends Component{ 
          render(){
            const settings = {
              autoplay:true,
              autoplaySpeed:5000,
              speed:2000,
              pauseOnFocus:true
              
          }
            return(
              <Slider {...settings} >{Movies}</Slider>
            )
          }
         }     

return(
  <S.Wrapper>
    <h1>UPCOMING</h1>
    <Carroucel/>
  </S.Wrapper>
)}

export default UpComing