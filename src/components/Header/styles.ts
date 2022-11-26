import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
overflow-x:hidden;
padding-bottom:100px;
background-color:rgb(0,0,0);
`
export const MovieInfo = styled.div`
color:aliceblue;
position:absolute;
text-shadow:1px 1px black;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 99vw;
height:100vh;
background-color:rgb(0,0,0,0.3);
${media.lessThan('small')`
    width:100vw;
`}

`
export const Title = styled.div`
max-width:1200px;
font-size:70px;
font-family:monospace;
span{
    font-size:20px;
    color: lightgray;
    }
 ${media.lessThan('small')`
    font-size:50px;
    padding-left:50px;
`}
`
export const Genre = styled.div`
font-size:larger;
max-width:250px;
margin-bottom:30px;
margin-top:30px;
display: inline-block;
margin-left:10px;
margin-right:10px;
`
export const Icon = styled.div`
display: flex;
justify-content:space-between;
width:350px;
`
export const Overview = styled.p`
max-width:900px;
font-size:larger;
margin-top:30px;
letter-spacing: 1px;
text-shadow:1px 0px 1px black;
`
export const Button=styled.button`
background-color:black;
color: white;
padding: 10px;
border-radius:20px;
margin-top:30px;
border:none;
width:150px;
font-size:larger;
:Hover{
    cursor:pointer;
    background-color:white;
    color:black;
    opacity:0.8;
}
`