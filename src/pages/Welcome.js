import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import WelcomeI from '../images/WelcomeI.png';
import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
            <section className='welcome-text'>
                <p>Welcome to Game Center! A collection of games made from open source APIs found on the web. </p>
            </section>

            <section className='link-section'>
                <Link to="/setup">
                    <button>Trivia →</button>
                </Link>
                <Link to='/wordGuess'>
                    <button>Word Guess →</button>
                </Link>
                <Link to='/truthOrDare'>
                    <button>Truth or Dare →</button>
                </Link>
                <Link to='/wouldYouRather'>
                    <button>Would You Rather →</button>
                </Link>
                <Link to='/neverHaveIEver'>
                    <button>Never Have I Ever →</button>
                </Link>
            </section>
            <section className='wtf'>
                <Link to="/WTF">
                    <button >What is This?</button>
                </Link>
            </section>


        </>
    );
}
export default Welcome;