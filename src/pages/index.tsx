import type { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { genres, results, topRated } from '../types'
import Header from '../components/Header';
import TopRated from '../components/TopRated';
import Popular from '../components/Popular';
import UpComing from '../components/UpComing';

 type props = {
  data:topRated
  genres:genres[]
  popular:results[]
  upComing:results[]
}
const Home: NextPage <props> = (props) => {
  const data = props.data.results
  const genres = props.genres
  const popular = props.popular
  const upComing = props.upComing
  
  return (
    < >
     
     <Header  genres={genres} data={data}/>
     <TopRated data={data} /> 
     <Popular popular={popular} />
     <UpComing genres={genres} data={upComing} />
     
    </>
  )
}
export default Home
export  const getServerSideProps:GetServerSideProps=async()=>{
  const link = 'https://api.themoviedb.org/3/'
  const key = '?api_key=4f4b4e5fe94ea194d54f83e0b1cd5bf8'
  const req = await axios.get(`${link}/movie/top_rated${key}`)

  const genre = await axios.get(`${link}/genre/movie/list${key}`)

  const popular = await axios.get(`${link}/movie/popular${key}`)

  const upComing = await axios.get(`${link}/movie/upcoming${key}`)
  
  return{
    props:{
      data:req.data,
      genres:genre.data.genres,
      popular:popular.data.results,
      upComing:upComing.data.results
    }
  }
}

