import { ParsedUrlQuery } from 'querystring'
import { genres } from '../../types'
import * as S from './styles'
type props = {
  data : ParsedUrlQuery 
  genres : genres[]
}
const Detail = ({data,genres}:props) => {
  const background = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
  const posterImg = `https://image.tmdb.org/t/p/original/${data.poster_path}`
  
  
 const gen = genres.filter((e)=>{ 
    if(typeof data.genre_ids == 'object'){
     const genreIds = data.genre_ids.map((e)=>{
      return Number(e)
  }) 
    return genreIds.find(i=>i==e.id)
}

  else{
    const genreIds = Number(data.genre_ids)
    return genreIds == e.id
  }
})
 const Genres = gen.map((e)=>{
  return(
    <>{e.name+' '}</>
  )
 })
return(
  <S.Wrapper>
    <S.Content>
      <S.PosterImg src={posterImg} alt="" />
      <S.Info>
        <p> <span>Release date: </span> {data.release_date}</p>
        <p><span>Vote average: </span>{data.vote_average}</p>
        <p><span>Genres: </span>{Genres}</p>
        <p>{data.overview}</p>
        
      </S.Info>
    </S.Content>
    <S.Img src={background} alt="" />

    
  </S.Wrapper>
)}

export default Detail