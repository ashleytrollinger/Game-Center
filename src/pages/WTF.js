import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './WTF.css'

function WTF() {
    return (
        <>
            <Header />
            <section className='wtf-container'>
                <h2>Why does this exist?</h2>
                <p>Game Center is the edited version of a website originally created as a gift for a friend.The original concept was online drinking games; however to be more appropriate for resumes and portfolios, I decided to make a more polished version.</p>
                <p>All games are games my friends and I would play together when we hang out; but we spent so much time thinking of the prompts or questions we would lose interest. So I decided to take action and make a functional website that generates the prompts for us from APIs.
                </p>
                <h2>How does this work?</h2>
                <p>Drink bitch uses <a href='https://opentdb.com/'>www.opentdb.com</a> to pull questions and create unique quizzes each time. If you for some reason want to add your own questions into the mix you can create an account on their website and submit your own questions. Then they will be in the API to be pulled. </p>
                <p>The cocktail generator was added as a second thought one because I(Ashley) was bored and also I thought it would be a fun addition to try a new drink while playing the game. The drinks are all being pulled from <a href="https://www.thecocktaildb.com/">www.thecocktaildb.com/</a>. The word game was another second thought I added because I wanted to learn something new and I wanted us to have options. </p>
                <section className='wtf'>
                    <Link to='/' className='homebtn'>
                        <button>← Back to Home</button>
                    </Link>
                </section>
            </section>
        </>
    )
}

export default WTF;