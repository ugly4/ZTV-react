import {Routes, Route} from 'react-router-dom'
import Matches from '../Matches/Matches'
import Tournaments from '../Tournaments/Tournaments'
import Results from '../Results/Results'
import Top from '../Top/Top'
import Player from '../Player/Player'
import Event from '../Event/Event'
import Team from '../Team/Team'
import './Main.css'

const Main = () => (
    <main>
        <Routes>
            <Route path="/tournaments" element={<Tournaments/>} />
            <Route exact path="/" element={<Matches/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/top" element={<Top/>} />
            <Route path="/player/*" element={<Player/>} />
            <Route path="/team/*" element={<Team/>} />
            <Route path="/player" element={<Player/>} />
            <Route path="/event/*" element={<Event/>} />
        </Routes>
      </main>
);

export default Main;