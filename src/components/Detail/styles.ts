import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color:black;
padding-bottom:50px;
`

export const Img = styled.img`
width:100%;
object-fit:cover;
height:100vh;

`
export const Content = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
${media.lessThan('medium')`
    flex-direction:column;
    justify-content:space-around;
`}
${media.lessThan('small')`
padding-top:150px;
`}

`
export const PosterImg = styled.img`
width:50%;
max-width:500px;
`
export const Info = styled.div`
max-width:1000px;
${media.greaterThan('large')`
margin-left:50px;
`}

p{
    font-size:22px;
    color:darkorange;
    text-shadow:1px 1px 1px black;
    margin-bottom:30px;
}
span{
    color:yellow
}
`
