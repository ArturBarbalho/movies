import router from 'next/router'
import { results } from '../../types'
import * as S from './styles'

type props = {
  popular:results[]
}
const Popular = ({popular}:props)  => {



  const Movies =  popular.map((e)  =>{
    const imgLink = 'https://image.tmdb.org/t/p/original/'
    const img = `${imgLink}${e.poster_path}`
    const lnk = {
      pathname:`/details/${e.title}`,
      query: e
    }
    return(
        <div key={e.id} style={{marginBottom:'-4px'}} >
        <S.MovieHover  onClick={()=>router.push(lnk)} />
        <S.Image  src={img} alt="" />
        </div>
    )
  })


return(
  <S.Wrapper>
    <h1>POPULAR</h1>
    <S.Container>
    {Movies}
    </S.Container>
  </S.Wrapper>
)
}
export default Popular