import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios';
import { genres, results,reviews } from '../../types/index';
import Detail from '../../components/Detail';
import Similars from '../../components/Similars';
import Reviews from '../../components/Reviews';
type props = {
    similars : results[]
    reviews : reviews[]
    genres : genres[]
}
const Details:NextPage<props> = ({similars,reviews,genres})=>{
const router = useRouter()
const data = router.query


return(
    <>
    <Detail genres={genres} data={data} /> 
    <Similars similars={similars}/>
    <Reviews reviews={reviews} />
    </>
)
}
export default Details

export  const getServerSideProps:GetServerSideProps=async(context)=>{
    const id = context.query.id
    const link = 'https://api.themoviedb.org/3/'
    const key = '?api_key=4f4b4e5fe94ea194d54f83e0b1cd5bf8'
    const similars = await axios.get(`${link}/movie/${id}/similar${key}`)
    const reviews = await axios.get(`${link}/movie/${id}/reviews${key}`)
    const genres = await axios.get(`${link}/genre/movie/list${key}`)
    return{
        props:{
            similars : similars.data.results,
            reviews : reviews.data.results,
            genres : genres.data.genres
        }
    }
}