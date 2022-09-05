import styled from 'styled-components'
import { FaAlignJustify, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <Nav>
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
      <div className="moboNav">
        <img src="data:image/png;base64,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" alt="slack logo" />
        <div className="icons">
          <FaSearch/>
          <FaAlignJustify/>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.div`
  width: 90%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* margin: 0px auto; */
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
  .moboNav {
    display: none;
    @media (max-width: 1100px){
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
      img {
        width: 200px;
        @media (max-width: 750px){
          width: 150px;
        }
      }
      svg {
        color: white;
        width: 25px;
        height: 25px;
        @media (max-width: 750px){
          width: 20px;
          height: 20px;
        }
      }
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-right: 50px;
      }
    }
  }
`