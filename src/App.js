import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import FooterSec from './components/FooterSec';

function App() {
  return (
    <Container>
      <header>
        <Navbar/>
        <SectionOne/>
      </header>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <FooterSec/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  @media (max-width: 1000px){
    font-size: 14px;
  }
  @media (max-width: 750px){
    font-size: 12px;
  }
  button {
    padding: .7rem 1.2rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }
  .btn1 {
    background-color: #4A154B;
    border: 1.5px solid white;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
  .btn2 {
    background-color: white;
    border: 1.5px solid #4A154B;
    color: #4A154B;
    font-family: Arial, Helvetica, sans-serif;
  }
  .link {
    color: #4285f4;
    cursor: pointer;
  }
  header {
    background-color: #4A154B;
    max-width: 100%;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }
`