import React from "react";
import { Link } from "react-router-dom";
function CardPokemon({ pokemon }) {
  return (
	
  <section className=" text-amber-50 body-font font-bold">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 bg-slate-200 border-emerald-600  rounded-lg overflow-hidden">
          <img className="px-10 object-cover object-center" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`}/>
          <div className="p-6 bg-slate-800 mx-2 my-1 rounded-md">
		  <h2 className="tracking-widest text-xs title-font font-bold  mb-1">N° {pokemon.id}</h2>
            <h2 className="tracking-widest text-xs title-font font-bold  mb-1">{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}</h2>
            <h1 className="title-font text-lg font-bold  mb-3">{pokemon.name}</h1>
            <div className="flex items-center flex-wrap ">
				<Link  to={`/pokemon/${pokemon.id}`}>
              <p className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Saber mas
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </p>
				</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
	);
}

export default CardPokemon;
