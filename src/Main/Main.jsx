import {Routes, Route} from 'react-router-dom'
import Matches from '../Matches/Matches'
import Tournaments from '../Tournaments/Tournaments'
import Results from '../Results/Results'
import Top from '../Top/Top'
import Player from '../Player/Player'
import Event from '../Event/Event'
import Team from '../Team/Team'

import TeamResults from '../Team/TeamResults'
import Match from '../Match/Match'

import TeamEvents from '../Team/TeamEvents'
import PlayerResults from '../Player/PlayerResults'
import PlayerEvents from '../Player/PlayerEvents'
import './Main.css'

const Main = () => (
    <main>
        <Routes>
            <Route path="/tournaments/*" element={<Tournaments/>} />
            <Route exact path="/" element={<Matches/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/top" element={<Top/>} />
            <Route path="/player/*" element={<Player/>} />
            <Route path="/team/*" element={<Team/>} />
            <Route path="/player" element={<Player/>} />
            <Route path="/event/*" element={<Event/>} />
            <Route path="/team_results" element={<TeamResults/>} />
            <Route path="/match" element={<Match/>} />
            <Route path="/team_events" element={<TeamEvents/>} />
            <Route path="/player_results" element={<PlayerResults/>} />
            <Route path="/player_events" element={<PlayerEvents/>} />
        </Routes>
      </main>
);

export default Main;