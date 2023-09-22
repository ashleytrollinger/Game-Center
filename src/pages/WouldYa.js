import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import WYR from '../images/WYR.png';
import './WouldYa.css';

function WouldYouRather() {
    const [question, setQuestion] = useState('');
    const rating = 'pg'; // Always use 'PG'

    const fetchWouldYouRather = async () => {
        try {
            const response = await fetch(`https://api.truthordarebot.xyz/api/wyr?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch "Would You Rather" question.');
            }
            const data = await response.json();
            setQuestion(data.question); // Extract and set only the question
        } catch (error) {
            console.error('Error fetching "Would You Rather" question:', error);
        }
    };

    return (
        <>
            <Header />
            <section className='nhie'>
            <img src={WYR} alt="Would You Rather"></img>
            </section>
            <div className='WYR'>
                <div className='btn-class'>
                    <button onClick={fetchWouldYouRather}>Get Question</button>
                </div>
                {question && (
                    <div className='populated'>
                        <p>{question}</p>
                    </div>
                )}
            </div>
            <section className='back-section'>
               <Link to='/' className='homebtn'>
                        <button>← Back to Home</button>
                    </Link>
            </section>
        </>
    );
}

export default WouldYouRather;
