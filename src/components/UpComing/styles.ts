import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color:black;
padding-top:150px;
overflow-x:hidden;
h1{
    color:white;
    width:200px;
    margin:auto;
    font-size:40px;
    margin-bottom:100px;
    
}
`
export const Back = styled.img`
width:100vw;
`
export const Poster = styled.img`
width:500px;
margin-right:100px;
@media(max-width:1600px){
    margin-right:0;
}
@media(max-width:1100px){
    width:300px;
}
@media(max-width:900px){
    width:200px;
}
`
export const Genres = styled.div`
color: darkgray;
display:flex;
flex-direction:row;
justify-content:center;
div{
    margin-left:30px;
    font-size:40px;
}
@media(max-width:1400px){
    div{
        font-size:25px;
    }
    
}
@media(max-width:900px){
    div{
        font-size:20px;
    }
}
@media(max-width:750px){
    flex-direction:column;
    div{
        margin-left:5px;
}
}
`
export const Description = styled.p`
color: darkorange;
max-width:1000px;
font-size:20px;
margin-top:60px;
@media(max-width:900px){
    font-size:15px;
    margin-top:10px;
}
`
export const Cont = styled.div`
display:flex;
max-width:2000px;
justify-content:center;
margin-top:100px;
${media.lessThan('small')`
    margin-top:0px;
`}
`
export const Button = styled.button`
border:none;
margin-top:20px;
width:200px;
height:30px;
border-radius:30px;
background-color:darkorange;
:Hover{
    background-color:black;
    color:darkorange;
    cursor:pointer;
    border:1px solid darkorange;
}
`
export const Btn = styled.div`
display: flex;
justify-content:center;
`
                