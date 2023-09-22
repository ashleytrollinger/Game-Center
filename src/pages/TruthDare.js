import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TOD from '../images/TOD.png';
import './TruthDare.css';

function TruthOrDare() {
    const [truth, setTruth] = useState('');
    const [dare, setDare] = useState('');
    const rating = 'pg'; // Always use 'pg13'
    const [randomSips, setRandomSips] = useState(null); // State to store the random number of sips
    const [randomExercise, setRandomExercise] = useState(null); // State to store the random exercise
    const [selectedOption, setSelectedOption] = useState(null);

    const generateRandomSipsAndExercise = () => {
        // Generate a random number between 1 and 6 for sips
        const randomSipCount = Math.floor(Math.random() * 6) + 1;
        setRandomSips(randomSipCount);

        // Define an array of possible exercises
        const exercises = ['jumping jacks', 'push ups', 'donkey kicks', 'star jumps'];

        // Generate a random index to select a random exercise
        const randomIndex = Math.floor(Math.random() * exercises.length);
        const randomExercise = exercises[randomIndex];
        setRandomExercise(randomExercise);
    };

    const fetchTruth = async () => {
        try {
            // Generate random sips and exercise when fetching truth
            generateRandomSipsAndExercise();

            const response = await fetch(`https://api.truthordarebot.xyz/v1/truth?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch truth statement.');
            }
            const data = await response.json();
            setTruth(data.question);
            setSelectedOption('truth');
        } catch (error) {
            console.error('Error fetching truth:', error);
        }
    };

    const fetchDare = async () => {
        try {
            // Generate random sips and exercise when fetching dare
            generateRandomSipsAndExercise();

            const response = await fetch(`https://api.truthordarebot.xyz/v1/dare?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch dare statement.');
            }
            const data = await response.json();
            setDare(data.question);
            setSelectedOption('dare');
        } catch (error) {
            console.error('Error fetching dare:', error);
        }
    };

    return (
        <>
            <Header />
            <section className='tod-body'>
                <section className='img-con'>
                    <img src={TOD} alt="Truth or Dare"></img>
                </section>
                <section className='tord-section'>
                    <div className='btn-class'>
                        <button onClick={fetchTruth}>TRUTH</button>
                        <p>OR</p>
                        <button onClick={fetchDare}>DARE</button>
                    </div>
                    <div className='populated'>
                        {selectedOption === 'truth' && (
                            <p>Truth: {truth}</p>
                        )}
                        {selectedOption === 'dare' && (
                            <p>Dare: {dare}</p>
                        )}
                        {selectedOption && (
                            <p>If you choose not to do the dare or truth, you must do {randomSips} {randomExercise}.</p>
                        )}
                    </div>
                </section>
                <section className='homebtn'>
                    <Link to="/">
                        <button>← Back to Home</button>
                    </Link>
                </section>
            </section>
        </>
    );
}

export default TruthOrDare;
