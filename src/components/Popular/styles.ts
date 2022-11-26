import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color:rgb(0,0,0,0.9);
padding-top:100px;
h1{
    color: white;
    margin:auto;
    width: 250px;
    font-size:50px;
    margin-bottom:30px;
}
`
export const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content:center;
`

export const Image = styled.img`
width:350px;
${media.lessThan('small')`
    width:50vw;
`}
`
export const MovieHover = styled.div`
position:absolute;
width:350px;
height:525px;
${media.lessThan('small')`
    width:50vw;
    height:292px;
`}

:Hover{
    cursor:pointer;
    background-color:rgb(0,0,0,0.5);
}
`