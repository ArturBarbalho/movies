import { reviews } from '../../types'
import * as S from './styles'

type props = {
  reviews : reviews[]
}
const Reviews = ({reviews}:props) => {
  
  const List = reviews.map((e)=>{
    const img = `https://image.tmdb.org/t/p/original/${e.author_details.avatar_path}`
    
    return(
      <S.Unit key={e.id}>
      <S.Img  onError={({ currentTarget }) => {
        currentTarget.src='/user.png'}} src={img}/> 
      <S.Right>
        <h2>{e.author}</h2>
        <p>{e.content}</p>
      </S.Right>
      </S.Unit>
    )
  })
return(
  <S.Wrapper>
    <h1>Reviews</h1>
    <div>{List}</div>
    
  </S.Wrapper>
)
}
export default Reviews