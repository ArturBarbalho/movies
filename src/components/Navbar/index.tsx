import Link from 'next/link'
import * as S from './styles'

const Navbar = () => {

return(
  <S.Wrapper>   
    <S.Logo>
      <img src="movie-frame.png" alt="" />
      <h3>FREEPOP</h3>
    </S.Logo>    
     
    <Link href='/'><a>Movies</a></Link>   
    
  </S.Wrapper>
)
}
export default Navbar