import './App.css';
import Review from './components/Review.jsx'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>These are some of the reviews</h1>
        <Review 
          name='Spiderman'
          country='US'
          image='spiderman'
          job='Super-hero'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deserunt aperiam. Commodi rerum nemo, illum suscipit ratione, quibusdam magnam ab eligendi similique, molestiae sequi consequatur voluptate odit labore possimus necessitatibus.'/>

        <Review 
          name='Spiderman Lego'
          country='UK'
          image='spider-lego'
          job='Super-hero'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deserunt aperiam. Commodi rerum nemo, illum suscipit ratione, quibusdam magnam ab eligendi similique, molestiae sequi consequatur voluptate odit labore possimus necessitatibus.'/>
      </div>
    </div>
  );
}

export default App;
