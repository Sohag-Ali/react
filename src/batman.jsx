import { useState } from "react"

export default function Batman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setsixes] = useState(0);
    const [foures, setfoures] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const handleFour = () => {
        const updateRuns = runs + 4 ;
          const updatedFour = foures + 1;
        setfoures(updatedFour);
        setRuns(updateRuns);
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updatedSix = sixes + 1;
        setsixes(updatedSix);
        setRuns(updateRuns);
    }
    return(
        <div>
            <h3>Player: Bangla Batman</h3>
            <p><small>Six : {sixes} </small></p>
            <p><small>Four : {foures} </small></p>
            {
                runs >= 50 && <p>Congratulation Your Score is 50</p>
            }
            {
                runs >= 100 && <p>Congratulation Your Score is 100</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}