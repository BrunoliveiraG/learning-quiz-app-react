import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import worldData from './world-110m.json';
import questions from './questions';

const WorldMap = () => {
    const svgRef = useRef(null);
    const currentQuestionIndex = useRef(0);
    const [score, setScore] = useState({ correct: 1, incorrect: 0 });

    const handleCountryClick = useCallback(
        (event, d) => {
            const currentQuestion = questions[currentQuestionIndex.current];
            if (d.properties.ADMIN === currentQuestion.answer) {
                alert('Congratulations, you got it right!');
                currentQuestionIndex.current++;
                setScore({ ...score, correct: score.correct + 1 });
            } else {
                alert('Sorry, wrong answer!');
                setScore({ ...score, incorrect: score.incorrect + 1 });
            }
        },
        [score]
    );

    const drawMap = () => {
        const svg = d3.select(svgRef.current);

        // Define projection
        const projection = d3.geoMercator().scale(120).translate([400, 250]);

        // Define path generator
        const path = d3.geoPath().projection(projection);

        // Draw map
        svg
            .selectAll('path')
            .data(worldData.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', '#ccc')
            .attr('stroke', '#333')
            .on('click', handleCountryClick);
    };

    useEffect(() => {
        drawMap();
    }, []);

    useEffect(() => {
        const currentQuestion = questions[currentQuestionIndex.current];
        drawMap();
        // update the question text
        document.getElementById('question-text').innerHTML = currentQuestion.question;
    }, [currentQuestionIndex]);

    const currentQuestion = questions[currentQuestionIndex.current];

    if (currentQuestionIndex.current === questions.length) {
        return (
            <div>
                <h2>Quiz complete!</h2>
                <p>You got {score.correct} answers correct and {score.incorrect} answers incorrect.</p>
            </div>
        );
    }

    return (
        <div>
            <h2 id="question-text">{currentQuestion.question}</h2>
            <svg ref={svgRef} width="800" height="500"></svg>
        </div>
    );
};

export default WorldMap;
