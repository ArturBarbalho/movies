import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
overflow-x:hidden;
padding-bottom:50px;
background-color:rgb(0,0,0);
`
export const Img=styled.img`
width:300px;
height:auto;
${media.lessThan('small')`
width:100vw;
`}
`

export const Title=styled.h2`
margin:auto;
width: 250px;
margin-bottom:40px;
font-size:40px;
color: white;
`

export const MovieContent = styled.div`
position:absolute;
width: 300px;
height: 100%;
opacity:0.0;
display:flex;
flex-direction:column;
align-items:center;

:Hover{
color:orange;
text-shadow:2px 2px 2px black;
background-color:rgb(0,0,0,0.3);
opacity:1;
} 

${media.lessThan('small')`
width:100vw;
`}
p{
    font-size:larger;
    margin-top:10px;
}
h3{
    font-size:22px;
    margin-top:50px;
    }
`
export const Button = styled.button`
margin-top:auto;
margin-bottom:auto;
width:200px;
height:40px;
background-color:rgb(0,0,0,0.5);
color: orange;
border-radius:20px;
:Hover{
    cursor:pointer;
    background-color:orange;
    color: black;
    border: none;
}
`
