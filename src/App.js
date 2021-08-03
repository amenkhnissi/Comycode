import './App.css';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Particles from 'react-particles-js';
import FadeIn from 'react-fade-in';



function App() {
  return (
    <div className="App">
      
      <div className="info">
      <FadeIn transitionDuration="700"  >
      <FullName/>
      <Address/>
      </FadeIn>
      </div>

      <ProfilePhoto/>
   
      <Particles 
      height="100vh"
      width="100vw"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            
          },
        }}
      />
    </div>
    
  );
}

export default App;
