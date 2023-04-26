import {Routes, Route} from 'react-router-dom'
import Matches from '../Matches/Matches'
import Tournaments from '../Tournaments/Tournaments'
import Results from '../Results/Results'
import Top from '../Top/Top'
import Player from '../Player/Player'
import './Main.css'

const Main = () => (
    <main>
        <Routes>
            <Route path="/tournaments" element={<Tournaments/>} />
            <Route path="/" element={<Matches/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/top" element={<Top/>} />
            <Route path="/player/*" element={<Player/>} />
        </Routes>
      </main>
);

export default Main;