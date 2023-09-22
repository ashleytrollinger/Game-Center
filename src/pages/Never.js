import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NHIE from '../images/NHIE.png';
import './Never.css';

function NeverHaveIEver() {
    const [prompt, setPrompt] = useState('');
    const [rating, setRating] = useState('pg13'); // Default rating
    const [randomExercise, setRandomExercise] = useState(null);

    // Function to fetch a random "Never Have I Ever" prompt
    const fetchRandomPrompt = async () => {
        try {
            const randomRating = Math.random() < 0.5 ? 'pg13' : 'pg';

            const response = await fetch(`https://api.truthordarebot.xyz/api/nhie?rating=${randomRating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch NHIE prompt.');
            }
            const data = await response.json();
            setPrompt(data.question);

            // Define an array of possible exercises
            const exercises = ['jumping jacks', 'push ups', 'donkey kicks', 'star jumps'];

            // Generate a random index to select a random exercise
            const randomIndex = Math.floor(Math.random() * exercises.length);
            const randomExercise = exercises[randomIndex];

            // Set the random exercise if the user hasn't done the prompt
            if (data.question && !data.done) {
                setRandomExercise(randomExercise);
            } else {
                // Reset the random exercise if the user has done the prompt
                setRandomExercise(null);
            }
        } catch (error) {
            console.error('Error fetching NHIE prompt:', error);
        }
    };

    useEffect(() => {
        // Fetch a random prompt when the component mounts or when the rating changes
        fetchRandomPrompt();
    }, [rating]);

    return (
        <>
            <Header />
            <section className='nhie'>
                <img src={NHIE} alt="Never Have I Ever"></img>
            </section>
            <div className='WYR'>
                <div className='btn-class'>
                    <button onClick={fetchRandomPrompt}>Get Prompt</button>
                </div>
                <div className='populated'>
                    <p >{prompt}</p>
                    {randomExercise !== null && (
                        <p>If you've ever done this, you must do {randomExercise}.</p>
                    )}
                </div>
            </div>
            <section className='back-section'>
                <Link to='/' className='homebtn'>
                    <button>← Back to Home</button>
                </Link>
            </section>
        </>
    );
}

export default NeverHaveIEver;
