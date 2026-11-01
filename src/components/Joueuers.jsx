import React from 'react'

function Joueuers({ joueur = {} }) {

  const {
    nom = "Joueur inconnu",
    age = "Âge inconnu",
    equipe = "Équipe inconnue",
    nationalite = "Nationalité inconnue",
    description = "Aucune description",
    numero = 0,
    image = "https://placehold.co/400x300"
  } = joueur

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative bg-slate-200">

        <img
          src={image}
          alt={nom}
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-4 top-4 rounded-xl bg-orange-500 px-4 py-2 text-2xl font-black text-white shadow-lg">
          {numero}
        </span>

      </div>

      <div className="p-5">

        <h2 className="text-xl font-extrabold text-slate-900">
          {nom}
        </h2>

        <p className="mt-1 text-sm font-semibold text-orange-600">
          {equipe}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-5 flex justify-between border-t border-slate-100 pt-4 text-sm">

          <div>
            <p className="text-slate-400">Âge</p>
            <p className="font-bold text-slate-800">{age}</p>
          </div>

          <div className="text-right">
            <p className="text-slate-400">Nationalité</p>
            <p className="font-bold text-slate-800">{nationalite}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Joueuers