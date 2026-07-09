import { useState } from 'react'
import Hero from '../components/Hero'
import Newarrival from '../components/Newarrival'
import Feature from '../components/features'
import Collection from '../components/collections'
import Finalsale from '../components/finalsale'


function Home() {
    
    
    return (
        <div  id='home'>
            
            <section id='hero'>
                <Hero />
            </section>
            <section id='newarrival'>
                <Newarrival/>
            </section>
            <section id='feature'>
                <Feature />
            </section>
            <section id='collection'>
                <Collection />
            </section>
            <section id='finalsale'>
                <Finalsale />
            </section>
            
        </div>
    )
}

export default Home