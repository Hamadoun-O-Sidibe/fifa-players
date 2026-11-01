import React from 'react'
import { joueurs } from '../controllers/Jouerurs'
import Joueuers from './Joueuers'

function JoueursList() {
  return (
    <main className='min-h-screen bg-slate-100 px-4 py-10'>
        <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
            <p className='mb-2 text-sm font-bold uppercase tracking-[0.3em] text-orange-600'>Joueurs FIFA</p>
            <h1 className='text-3xl font-extrabold text-slate-900 md:text-5xl'>
                Nos Joueurs
            </h1>
            <p className='mt-3 text-slate-50O'>Decouvrez les profils de vos footballeurs préférés.</p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      
      {joueurs.map((joueur => (
        <Joueuers
        key={joueur.id}
        joueur={joueur}
        
        />
      )))}
    </div>
    </div>
    </main>
  )
}

export default JoueursList
