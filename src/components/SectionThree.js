import styled from "styled-components"

export default function SectionThree() {
  return (
    <Container>
      <div className="links">
        <h1>Teams large and small rely on Slack</h1>
        <p>Slack securely scales up to support collaboration at the world's biggest companies.</p>
        <div className="link_buttons">
          <button className='btn1'>MEET SLACK FOR ENTERPRISE</button>
          <button className='btn2'>TALK TO SALES</button>
        </div>
      </div>
      <div className="stats">
        <ul>
          <li>
            <h1>85%</h1>
            <p>of users say Slack has improved communication*</p>
          </li>
          <li>
            <h1>86%</h1>
            <p>feel their ability to work remotely has improved*</p>
          </li>
          <li>
            <h1>88%</h1>
            <p>feel more connected to their teams*</p>
          </li>
        </ul>
      </div>
      <div className="subSecFour">
        <div className="video_sec">
            <video playsInline autoPlay muted loop>
              <source src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4"/>
              browser does not support the video
            </video> 
        </div>
        <div className="text_sec">
          <h1>'We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked - very little disruption.'</h1>
          <div className="">
            <h3>Mark Smith</h3>
            <p>Senior Technical Product Manager, T-Mobile</p>
          </div>
          <p className='link'>See more customer stories &#10230;</p>
        </div>
      </div>
      <div className="short_note">
        <p>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1000px){
    padding:0;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
  }
  .links {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media (max-width: 1000px){
        width: 80%;
        font-size: 10px;
    }
    h1 {
      font-size: 3.2em;
    }
    p {
      text-align: center;
      font-size: 1.3em;
      font-weight: 500;
    }
    .link_buttons {
      display: flex;
      gap: 1rem;
      button {
        padding: 1.1rem 2rem;
      }
    }
  }
  .stats {
    width: 60%;
    padding: 4rem 0;
    font-size: 12px;
    @media (max-width: 1000px){
      width: 70%;
      font-size: 10px;
    }
    @media (max-width: 750px){
      font-size: 7px;
      width: 90%;
    }
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        width: 170px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1 {
          font-size: 3.8em;
          color: #4A154B;
        }
        p {
          font-size: 1.6em;
          font-weight: 600;
        }
      }
    }
  }
  .subSecFour {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 1rem 0;
    @media (max-width: 1000px){
      grid-template-columns: 1fr;
    }
    .video_sec {
      width: 100%;
      video {
        width: 100%;
        border-radius:0% 31% 23% 0% / 42% 49% 48% 43% ;
        @media (max-width: 1000px){
          width: 95%;
        }
      }
    }
    .text_sec {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      @media (max-width: 1000px){
        padding: 1rem;
      }
      h1 {
        font-size: 1.8rem;
        font-weight: 100;
        font-style: italic;
        line-height: 40px;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
  .short_note {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    font-size: .9rem;
    text-align: center;
  }
`