import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Setup.css';

function Setup() {
    const navigate = useNavigate();

    // State to store user choices
    const [numQuestions, setNumQuestions] = useState(10); // Default to 10 questions
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');


    const handleStartTrivia = () => {
        // Construct the API URL based on user selections
        const apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}`;

        // Fetch questions from the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const questions = data.results; 
                navigate(`/question/${1}`, { state: { questions } });
            })
            .catch((error) => {
                console.error(error);
                // Handle errors here
            });
    };
    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    return (
        <>
            <Header />
            <div className='setup-container'>
                <h2>create your trivia</h2>
                <form className='form-container'>
                    <div>
                        <label>How many questions do you want to try? (1-50)</label>
                        <input
                            type="number"
                            min="1"
                            max="50"
                            value={numQuestions}
                            onChange={(e) => setNumQuestions(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Select a category:</label>
                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="12">Music</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="19">Math</option>
                            <option value="23">History</option>
                            <option value="22">Geography</option>
                        </select>
                    </div>
                    <div>
                        <label>Select difficulty:</label>

                        <input
                            type="radio"
                            id="easy"
                            name="difficulty"
                            value="easy"
                            checked={selectedDifficulty === "easy"}
                            onChange={handleDifficultyChange}
                        />
                        <label htmlFor="easy">Easy</label>

                        <input
                            type="radio"
                            id="medium"
                            name="difficulty"
                            value="medium"
                            checked={selectedDifficulty === "medium"}
                            onChange={handleDifficultyChange}
                        />
                        <label htmlFor="medium">Medium</label>

                        <input
                            type="radio"
                            id="hard"
                            name="difficulty"
                            value="hard"
                            checked={selectedDifficulty === "hard"}
                            onChange={handleDifficultyChange}
                        />
                        <label htmlFor="hard">Hard</label>

                    </div>
                    <div className='start-t-div'>
                        <button type="button" onClick={handleStartTrivia} className='start-trivia'>
                            Start Trivia
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Setup;
