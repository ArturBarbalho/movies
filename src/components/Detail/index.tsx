import { ParsedUrlQuery } from 'querystring'
import { genres,results } from '../../types'
import * as S from './styles'

type props = {
  data : ParsedUrlQuery | results
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
    <span style={{color:'darkorange'}} key={e.id}>{e.name+' '}</span>
  )
 })
return(
  <S.Wrapper>
    <S.Content>
      <S.PosterImg src={posterImg}  />
      <S.Info>
        <p> <span>Relase date:</span> {data.release_date}</p>
        <p><span>Vote avarage:</span> {data.vote_average}</p>
        <p><span>Genres: </span>{Genres}</p>
        <p>{data.overview}</p>
        
      </S.Info>
    </S.Content>
    <S.Img  src={background} />

    
  </S.Wrapper>
)}

export default Detail