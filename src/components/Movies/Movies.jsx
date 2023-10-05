import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import IteMovies from "../IteMovies/IteMovies"

const Movies = () => {

    const { data } = useContext(DataContext)

    return (
        
        <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
              bg-slate-800 rounded-2xl gap-2 pt-6">

            {
                data && data.map(item => (
                    <IteMovies
                        key={item.imdbID}
                        title={item.Title}
                        year={item.Year}
                        poster={item.Poster}
                    />
                ))
            }
        </div>
       
    )
}
export default Movies