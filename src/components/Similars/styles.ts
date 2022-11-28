import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
overflow-x:hidden;
background-color:black;
padding-bottom:50px;
h1{
    color:white;
    width: 100px;
    margin:auto;
    font-size:50px;
    margin-bottom:30px;
    
}
${media.lessThan('small')`
h1{
    margin-left:110px;
}
`}
`
export const Img = styled.img`
width:100%;
${media.lessThan('small')`
width:200px;
`}
`
export const Behind = styled.div`
position:absolute;
width:20vw;
display:flex;
height:100%;
justify-content:center;
align-items:center;
opacity:0.0;
@media(max-width:1500px){
width:25vw;
}
@media(max-width:1100px){
width:33vw;
}
@media(max-width:850px){
width:49vw;
}
${media.lessThan('small')`
width:200px;
`}
:Hover{
background-color:rgb(0,0,0,0.5);    
opacity:1;
}
`
export const Button=styled.button`
background-color:rgb(0,0,0,0.1);
color:darkorange;
border:1px solid darkorange;
border-radius:20px;
width:150px;
height:40px;
:Hover{
    cursor:pointer;
    background-color:black;
}
`