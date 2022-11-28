import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color:black;
padding-bottom:50px;
h1{
    color: white;
    margin: auto;
    width: 100px;
    font-size:50px;
    margin-bottom:30px;
}
${media.lessThan('small')`
h1{
    margin-left:110px;
}
`}
`
export const Unit = styled.div`
display:flex;
margin-top:20px;
justify-content:center;
`
export const Img = styled.img`
width:50px;
border-radius:100px;
height:50px;

`
export const Right = styled.div`
max-width:1500px;
width:100vw;
margin-left:20px;
color:white;
h2{
    color:darkorange;
    margin-bottom:20px;
    }
`