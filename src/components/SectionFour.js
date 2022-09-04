import styled from "styled-components"

export default function SectionFour() {
  return (
    <Container>
      <h1>Take a deeper dive into a new way to work</h1>
      <div className="cards_sec">
        <div className="cards cardOne">
          <div className="text_sec">
            <p>Collection</p>
            <h2>Slack as your digital HQ</h2>
          </div>
          <div className="pic_sec">
            <img src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-01.png" alt="" />
          </div>
          <div className="link_sec">
            <p>SEE ALL</p>
            <p> &#10230;</p>
          </div>
        </div>
        <div className="cards cardTwo">
          <div className="pic_sec">
            <img src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg" alt="" />
          </div>
          <div className="text_sec">
            <p>Resource</p>
            <h2>See how others are building their digital HQ</h2>
          </div>
          <div className="link_sec">
            <p>READ MORE</p>
            <p> &#10230;</p>
          </div>
        </div>
        <div className="cards cardThree">
          <div className="pic_sec">
            <img src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg" alt="" />
          </div>
          <div className="text_sec">
            <p>Webinar</p>
            <h2>Embracing a digital-first approach to work</h2>
          </div>
          <div className="link_sec">
            <p>WATCH NOW</p>
            <p> &#10230;</p>
          </div>
        </div>
        <div className="cards cardFour">
          <div className="pic_sec">
            <img src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg" alt="" />
          </div>
          <div className="text_sec">
            <p>E-book</p>
            <h2>Reinventing work: new imperatives for the future of working</h2>
          </div>
          <div className="link_sec">
            <p>GET E-BOOK</p>
            <p> &#10230;</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  background-color: #f4ede4;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  h1 {
    font-size: 2em;
    margin-top: 1em;
    text-align: center;
  }
  .cards_sec {
    width: 80%;
    margin: 2rem auto;
    padding: .6rem;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    gap: 2rem;
    @media (max-width: 1200px){
      width: 65%;
    }
    @media (max-width: 750px){
      width: 40%;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
    }
    h2 {
      font-size: 1.2rem;
    }
    .cards {
      /* width: calc(((100vh*60)/100)); */
      /* width: 80%; */
      height: 400px;
      /* border: 1px solid black; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      .link_sec {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
        }
      }
      .text_sec {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
    }
    .cardOne {
        background-color: #4a154b;
        color: white;
        .text_sec {
          margin-top: 1rem;
        }
    }
    .cardTwo, .cardThree, .cardFour {
      background-color: white;
      color: black;
      .link_sec {
        color: #4285f4;
      }
      .text_sec {
        margin-bottom: 5rem;
      }
    }
  }
`