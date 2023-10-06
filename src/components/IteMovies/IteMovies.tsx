import React from 'react';
//import ImageDefault from '../../assets/icono_pelicula.png';

interface IteMoviesProps {
  title: string;
  year: string;
  poster: string;
}

const IteMovies: React.FC<IteMoviesProps> = ({ title, year, poster }) => {
  //const imagen = poster === 'N/A' ? ImageDefault : poster;

  return (
    <div className='bg-slate-800 sw-[300px] gap-6 rounded-xl shadow-sm shadow-slate-100 hover:scale-105 flex flex-col justify-center items-center'>
      <p className='text-xl text-slate-200 font-bold mt-4 p-2'>{title}</p>
      <img className='w-[300px] h-[400px]' src={poster} alt={title} />
      <p className='font-semibold text-stone-400 mb-4'>{year}</p>
    </div>
  );
};

export default IteMovies;