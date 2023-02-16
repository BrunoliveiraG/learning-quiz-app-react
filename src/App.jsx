import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorldMap from './components/WorldMap';

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import PickCategory from "./components/PickCategory";
import CreateContent from "./components/CreateContent"

import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

    return (
      <Router>
        <Switch>
            <Route path="/quiz">
                    <div className="App">
                        <h1>Módulo Quiz</h1>
                        {quizState.gameStage === "Start" && <Welcome />}
                        {quizState.gameStage === "Category" && <PickCategory />}
                        {quizState.gameStage === "Playing" && <Question />}
                        {quizState.gameStage === "End" && <GameOver />}
                    </div>
                </Route>
                <Route path="/map">
                    <div className="App">
                        <WorldMap />
                    </div>
                </Route>
                <Route path="/crud">
                    <div className="App">
                        <CreateContent />
                    </div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <MainPage />
                    </div>
                </Route>
        </Switch>
      </Router>
  );
}

export default App;
