import React, { useState } from 'react';

const CrudComponent = () => {
    const [showQuizFields, setShowQuizFields] = useState(false);
    const [showMapFields, setShowMapFields] = useState(false);

    const handleCreateQuizClick = () => {
        setShowQuizFields(true);
        setShowMapFields(false);
    };

    const handleCreateMapClick = () => {
        setShowQuizFields(false);
        setShowMapFields(true);
    };

    return (
        <div>
            <h2>Create Quiz or Map</h2>
            <button onClick={handleCreateQuizClick}>Create Quiz</button>
            <button onClick={handleCreateMapClick}>Create Map</button>
            {showQuizFields && (
                <div>
                    <h3>Create Quiz</h3>
                    <label>
                        Question:
                        <input type="text" />
                    </label>
                    <label>
                        Answer 1:
                        <input type="text" />
                    </label>
                    <label>
                        Answer 2:
                        <input type="text" />
                    </label>
                    <label>
                        Answer 3:
                        <input type="text" />
                    </label>
                    <label>
                        Answer 4:
                        <input type="text" />
                    </label>
                    <label>
                        Correct Answer:
                        <input type="text" />
                    </label>
                    <button>Save</button>
                </div>
            )}
            {showMapFields && (
                <div>
                    <h3>Create Map</h3>
                    <label>
                        Question:
                        <input type="text" />
                    </label>
                    <label>
                        Country:
                        <input type="text" />
                    </label>
                    <button>Save</button>
                </div>
            )}
        </div>
    );
};

export default CrudComponent;
