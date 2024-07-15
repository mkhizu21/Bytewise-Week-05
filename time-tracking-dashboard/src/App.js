import ProfileCard from './components/ProfileCard'
import Cards from './components/Cards'
import { useEffect,useState } from 'react';

function App() {
  const [Daily, setDaily] = useState(true);
  const [Weekly, setWeekly] = useState(false);
  const [Monthly, setMonthly] = useState(false);

  const [timeframes, setTimeframes] = useState([]);

  const fetchData = async (index) => {
      const res = await fetch(`http://localhost:8000/${index}`);
      const data = await res.json();
      return data
  }

  useEffect(() => {
      
      const getTimeframes = async () => {
        let arr = [];
        for(let i = 0; i < 6; i++) {
          const timeframesFromServer = await fetchData(i);
          arr.push(timeframesFromServer);
        }
        setTimeframes(arr);
      }
      
      console.log(timeframes);
      getTimeframes();
  },[])

  const handleClick = (e) => {
      if(e.target.textContent === 'Daily') {
          setDaily(true);
          setWeekly(false);
          setMonthly(false);
      } else if(e.target.textContent === 'Weekly') {
          setDaily(false);
          setWeekly(true);
          setMonthly(false);
      } else {
          setDaily(false);
          setWeekly(false);
          setMonthly(true);
      }
  }

  return (
    <div className="container">
      <ProfileCard onClick={handleClick} statusD={Daily} statusW={Weekly} statusM={Monthly} />
      {timeframes.length > 0 ? timeframes.map((timeframe,index) => (
        <Cards key={index} Title={timeframe} statusD={Daily} statusW={Weekly} statusM={Monthly} />
      )) : 'Loading...'}
    </div>
  );
}

export default App;
