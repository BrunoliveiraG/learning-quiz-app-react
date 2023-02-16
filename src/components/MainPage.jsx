import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <div>
                <Link to="/quiz">
                    <button>Quiz</button>
                </Link>
            </div>
            <div>
                <Link to="/map">
                    <button>Geography</button>
                </Link>
            </div>
            <div>
                <Link to="/crud">
                    <button>Create</button>
                </Link>
            </div>
        </div>
    );
};

export default MainPage;