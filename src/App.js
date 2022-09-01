import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Container>
      <header>
        <nav>
          <div className="nav_left">
            <ul className='hide'>
              <li>
                <img src="data:image/png;base64,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" alt="slack logo" />
              </li>
              <li><p>Product</p></li>
              <li><p>Solutions</p></li>
              <li><p>Enterprice</p></li>
              <li><p>Resources</p></li>
              <li><p>Pricing</p></li>
            </ul>
          </div>
          <div className="nav_right">
            <ul className='hide'>
              <li><p>Search</p></li>
              <li><p>Sign in</p></li>
              <li>
                <button className='btn1'>Talk To Sales</button>
              </li>
              <li>
                <button className='btn2'>Try For Free</button>
              </li>
            </ul>
          </div>
        </nav>
        <section className="sectionOne">
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
        </section>
      </header>
      <section className='sectionTwo'>
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
      </section>
      <section className='sectionThree'>
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
      </section>
      <section className='sectionFour'>
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
      </section>
      <section className='sectionFive'>
        <h1>Welcome to your new digital HQ.</h1>
        <div className="button_sec">
          <button className='btn2'>TRY FOR FREE</button>
          <button className='btn1'>TALK TO SALES</button>
        </div>
      </section>
      <section className='footerSec'>
        <div className="logo">
          <img src="data:image/png;base64,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" alt="slack logo" />
        </div>
        <ul>
          <li>
            <h2>WHY SLACK</h2>
            <ul>
              <li><p>Slack vs email</p></li>
              <li><p>Channels</p></li>
              <li><p>Engagement</p></li>
              <li><p>Scale</p></li>
              <li><p>Watch the demo</p></li>
            </ul>
          </li>
          <li>
            <h2>PRODUCT</h2>
            <ul>
              <li><p>Features</p></li>
              <li><p>Integrations</p></li>
              <li><p>Enterprise</p></li>
              <li><p>Solutions</p></li>
            </ul>
          </li>
          <li>
            <h2>PRICING</h2>
            <ul>
              <li><p>Subscriptions</p></li>
              <li><p>Paid vs free</p></li>
            </ul>
          </li>
          <li>
            <h2>RESOURCES</h2>
            <ul>
              <li><p>Partners</p></li>
              <li><p>Developers</p></li>
              <li><p>Community</p></li>
              <li><p>Apps</p></li>
              <li><p>Blog</p></li>
              <li><p>Help Center</p></li>
              <li><p>Events</p></li>
            </ul>
          </li>
          <li>
            <h2>COMPANY</h2>
            <ul>
              <li><p>About us</p></li>
              <li><p>Leadership</p></li>
              <li><p>Investor relatios</p></li>
              <li><p>News</p></li>
              <li><p>Media kit</p></li>
              <li><p>Careers</p></li>
            </ul>
          </li>
        </ul>
        <hr width='80%' />
        <div className="links">
          <div className="links_left">
            <ul>
              <li><h3>Status</h3></li>
              <li><h3>Privacy</h3></li>
              <li><h3>Terms</h3></li>
              <li><h3>Cookie preferences</h3></li>
              <li><h3>Contact us</h3></li>
              <li><h3>Change region</h3></li>
            </ul>
          </div>
          <div className="links_right">
            <div className="download">
              <img src="https://cdn-icons-png.flaticon.com/128/2319/2319152.png" alt="" />
              <p>Download Slack</p>
            </div>
            <ul>
              <li><img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="twitter" /></li>
              <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="facebook" /></li>
              <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="youtube" /></li>
              <li><img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="linkedin" /></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
        </div>
      </section>
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
    nav {
      width: 90%;
      min-height: 100px;
      display: flex;
      justify-content: space-between;
      /* background-color: #4285f4; */
      img {
        width: 180px;
      }
      .nav_left{
        display: flex;
        align-items: center;
        ul {
        display: flex;
        align-items: center;
        list-style: none;
        font-size: 17px;
        font-weight: bold;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        @media (max-width: 1100px){
          display: none;
        }
        li {
          padding: 3px 10px;
          cursor: pointer;
          font-size: 12px;
            @media (max-width: 1300px){
              font-size: 11px;
            }
          p{
            font-size: 1.3em;
          }
        }
      }
    } 
      .nav_right{
        display: flex;
        align-items: center;
        ul {
          display: flex;
          align-items: center;
          list-style: none;
          font-size: 17px;
          font-weight: bold;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          @media (max-width: 1100px){
            display: none;
          }
          li {
            padding: 3px 10px;
            cursor: pointer;
            font-size: 12px;
            @media (max-width: 1300px){
              font-size: 11px;
            }
            p{
              font-size: 1.3em;
            }
          }
        }
      }
    }
    .sectionOne {
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
    }
  }
  .sectionTwo {
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
  }
  .sectionThree {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    font-family: Arial, Helvetica, sans-serif;
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
        width: 80%;
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
  }
  .sectionFour {
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
  }
  .sectionFive {
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
  }
  .footerSec {
    padding: 2rem 0;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 1000px){
      width: 100%;
      font-size: 14px;
    }
    @media (max-width: 750px){
      font-size: 12px;
    }
    hr {
      color: black;
      margin: 2rem 0;
      @media (max-width: 750px){
        width: 90%;
      }
    }
    h2{
      font-size: 1em;
      padding: 1rem 0;
    }
    img {
      width: 8em;
    }
    ul {
      width: 80%;
      display: flex;
      gap: 1rem;
      list-style: none;
      li {
        width: 100%;
        ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 1rem;
          font-size: 1rem;
          @media (max-width: 1000px){
            font-size: 14px;
          }
          @media (max-width: 750px){
            font-size: 12px;
          }
          p{
            font-size: 1em;
          }
        }
      }
    }
    .links {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      @media (max-width: 750px){
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
        gap: 1rem;
      }
      h3 {
        font-size: 1em;
      }
      .links_left {
        width: 40%;
        ul {
          width: 100%;
          display: flex;
          @media (max-width: 750px){
            flex-direction: column;
          }
          li {
            width: 100%;
          }
        }
      }
      .links_right {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
        @media (max-width: 750px){
            flex-direction: column;
        }
        ul {
          width: 50%;
          display: flex;
          align-items: center;
          gap: 0;
          @media (max-width: 750px){
            width: 100%;
          }
        }
        img {
          width: 1em;
          cursor: pointer;
          @media (max-width: 750px){
            width: 2em;
            margin-right: 1em;
        }
        }
        p {
          color: #4285f4;
          font-weight: 500;
        }
        .download {
          display: flex;
          align-items: center;
          gap: .3rem;
          cursor: pointer;
        }
      }
    }
    .copyright {
      width: 80%;
      display: flex;
      align-items: center;
      padding: 2rem 0;
      @media (max-width: 750px){
        width: 90%;
      }
      p {
        font-size: .8rem;
      }
    }
  }
`