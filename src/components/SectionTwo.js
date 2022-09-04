import styled from "styled-components"

export default function SectionTwo() {
  return (
    <Container>
      <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
        <div className="companies">
            <ul>
              <li><img src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png" alt="" /></li>
              <li><img src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png" alt="" /></li>
              <li><img src="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png" alt="" /></li>
              <li><img src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png" alt="" /></li>
              <li><img src="https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png" alt="" /></li>
              <li><img src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png" alt="" /></li>
            </ul>
        </div>
        <div className="subSecOne">
          <div className="video_sec">
            <video playsInline autoPlay muted loop>
              <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"/>
              browser does not support the video
            </video>
          </div>
          <div className="text_sec">
            <h1>Bring your team together</h1>
            <p>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it's easier to connect across departments, offices, time zones and even other companies.</p>
            <p className='link'>Learn more about channels &#10230;</p>
          </div>
        </div>
        <div className="subSecTwo">
          <div className="text_sec">
            <h1>Choose how you want to work</h1>
            <p>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
            <p className='link'>Learn more about flexible communication &#10230;</p>
          </div>
          <div className="video_sec">
            <video playsInline autoPlay muted loop>
              <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm"/>
              browser does not support the video
            </video>
          </div>
        </div>
        <div className="subSecThree">
          <div className="video_sec">
            <video playsInline autoPlay muted loop>
              <source src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"/>
              browser does not support the video
            </video>
          </div>
          <div className="text_sec">
            <h1>Move faster with your tools in one place</h1>
            <p>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>
            <p className='link'>Learn more about the Slack platform &#10230;</p>
          </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: #f4ede4;
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    padding: 1rem 0;
  }
  .companies {
    width: 60%;
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
      width: 70%;
    }
    @media (max-width: 750px){
      width: 80%;
    }
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      justify-content: space-between;
      li {
        padding: 10px 10px;
        cursor: pointer;
        img {
          max-width: 100%;
        }
      }
    }
  }
  .subSecOne,.subSecTwo,.subSecThree {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 1000px){
      width: 100%;
      flex-direction: column;
    }
    .video_sec {
      width: 100%;
      video {
        width: 80%;
      }
    }
    .text_sec {
      width: 55%;
      font-size: 13px;
      margin: 1em 0;
      @media (max-width: 1000px){
        width: 80%;
        font-size: 11px;
        align-self: flex-end;
        padding: 0 1rem;
      }
      h1{
      font-size: 3.3em;
      text-align: left;
      }
      p {
        font-size: 1.5em;
        font-weight: 400;
        line-height: 1.7rem;
      }
    }
  }
  .subSecTwo {
    .video_sec {
      display: flex;
      justify-content: flex-end;
    }
    .text_sec{
      @media (max-width: 1000px){
        align-self: flex-start;
        padding: 0 1rem;
      }
    }
  }
`
