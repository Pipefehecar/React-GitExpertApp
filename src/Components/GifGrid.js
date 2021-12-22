import React  from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then( imgs => setImages(imgs));
    //     //console.log(category);
    // }, [category])
    

    return (
        <>
        <h2>{category.toUpperCase()}</h2>   
       {loading && <p className="animate__animated animate__shakeY">Loading...</p>}
        <div className="card-grid">
             {
             images.map(img =>(
                <GifGridItem key={img.id} { ...img } />
             ))
            }
            
        </div>
        <hr/><br/>
        </>
    )
}
export default GifGrid;
