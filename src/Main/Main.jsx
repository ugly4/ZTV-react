import {Routes, Route} from 'react-router-dom'
import Matches from '../Matches/Matches'
import Tournaments from '../Tournaments/Tournaments'
import Results from '../Results/Results'
import Teams from '../Teams/Teams'
import './Main.css'

const Main = () => (
    <main>
        <Routes>
            <Route path="/tournaments" element={<Tournaments/>} />
            <Route path="/matches" element={<Matches/>} />
            <Route path="/" element={<Results/>} />
            <Route path="/teams" element={<Teams/>} />
        </Routes>
      </main>
);

export default Main;