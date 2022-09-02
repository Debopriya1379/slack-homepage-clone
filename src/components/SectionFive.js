import styled from "styled-components"

export default function SectionFive() {
  return (
    <Container>
      <h1>Welcome to your new digital HQ.</h1>
      <div className="button_sec">
        <button className='btn2'>TRY FOR FREE</button>
        <button className='btn1'>TALK TO SALES</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: #4A154B;
  padding: 6rem 0;
  border-radius: 0% 0% 45% 45% / 0% 0% 45% 45%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  color: white;
  gap: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1000px){
    font-size: 14px;
  }
  @media (max-width: 750px){
    font-size: 12px;
  }
  h1 {
    font-size: 3.2em;
    text-align: center;
  }
  .button_sec {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 750px){
      flex-direction: column;
    }
    button {
      padding: 1.1rem 2rem;
      @media (max-width: 750px){
        width: 70%;
      }
    }
  }
`