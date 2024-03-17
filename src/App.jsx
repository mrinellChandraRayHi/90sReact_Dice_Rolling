import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import RollDice from './Components/RollDice';
import './App.css';

library.add(fas);

const App = () => { 
    return ( 
        <div> 
            <RollDice/>
        </div> 
    ); 
};

export default App;
