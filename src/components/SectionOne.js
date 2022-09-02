import styled from "styled-components"

export default function SectionOne() {
  return (
    <Container>
      <div className="links">
        <h1>Great teamwork starts with a digital HQ</h1>
        <p><span id='yellow_color'>Slack is free to try</span> for as long as you like</p>
        <div className="signup_links">
          <button className='btn2'>SIGN UP WITH EMAIL ADDRESS</button>
          <div className="google_signup">
            <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt="gLogo" />
            <button>SIGN UP WITH GOOGLE</button>
          </div>
        </div>
      </div>
      <div className="_video">
        <video playsInline autoPlay muted loop>
          <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/webm"/>
          browser does not support the video
        </video> 
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 97.5%;
  height: calc(75vh-100px);
  min-height: calc(75vh-100px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: 750px){
    font-size: 10px;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .links {
    width: 90%;
    margin-left: 7rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 2rem;
    color: white;
    @media (max-width: 1500px){
      margin-left: 4rem;
    }
    @media (max-width: 1300px){
      margin-left: 2rem;
    }
    @media (max-width: 1000px){
      width: 100%;
      margin: 0 auto;
    }
    @media (max-width: 750px){
      width: 90%;
      align-items: center;
      margin: 0 auto;
    }
    h1{
      font-size: 3.6rem;
      text-align: left;
      @media (max-width: 1300px){
        font-size: 3rem;
      }
      @media (max-width: 750px){
        font-size: 3.1rem;
        text-align: center;
      }
    }
    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
    #yellow_color {
      color: #ecb22e;
    }
    .signup_links {
      width: 90%;
      display: flex;
      gap: .5rem;
      @media (max-width: 750px){
        flex-direction: column;
      }
      button {
        @media (max-width: 1000px){
          width: 100%;
          padding: .6rem 1.2rem;
        }
      }
      .google_signup {
        background-color: #4285f4;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          padding: 1rem 1.2rem;
          background: transparent;
          color: white;
        }
        img {
          width: 3rem;
          margin: 4px;
          border-radius: 3px;
        }
      }
    }
  }
  video {
    width: 95%;
    @media (max-width: 1000px){
      width: 150%
    }
    @media (max-width: 750px){
      width: 100%;
      padding: 1rem 0;
    }
  }
  ._video {
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 1000px){
      width: 100%;
      margin: 0 auto;
      margin-right: -60%;
    }
    @media (max-width: 750px){
      width: 90%;
      margin: 0 auto;
    }
  }
`