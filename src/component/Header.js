import styled from 'styled-components';
import {auth, provider} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import { green } from '@material-ui/core/colors';
import { Home } from '@material-ui/icons';
import emk from './photos/emk.png';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


function Header() {
  const history = useHistory();
  const [ user ] = useAuthState(auth);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        history.push("/home");
      }
    });
  }, [user]);
  const handleAuth = () =>{
      auth.signInWithPopup(provider).then(result =>
        console.log(result)
          ).catch(
        error => alert(error.message)
      )
  }
console.log(user);
    return (
        <Nav>
            <Logo to="/home">
                <img src={emk}/>
            </Logo>
            {
              !user ?  <Login onClick={handleAuth}> LOGIN</Login>:
              <>
              <NavMenu>
              <Link to="/home">
              <Hicon/>
             
              <span>HOME</span>
              </Link>
              <Link to="/multichart">
              <Baricon/>
              <span>MULTICHART</span>
              </Link>
              <Link to="/forex">
              <Dollor/>
              <span>FOREX</span>
              </Link>              
          </NavMenu>
          <SignOut>
          <UserImg src={user.photoURL} alt={user.displayName} />
          <DropDown>
            <span onClick={()=>auth.signOut().then(
              history.push('/')
            )}>SIGN OUT</span>
          </DropDown>
        </SignOut>

              </>
            }
           
         
            
        </Nav>
    )
}
export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  
`;
const Hicon = styled(Home)`
background: transparent;
color: whitesmoke;
:hover{
  color: lightgreen;
}
@media (max-width: 680px) {
          font-size: 8px;
}
`;
const Baricon = styled(BarChartIcon)`
background: transparent;
color: whitesmoke;
:hover{
  color: lightgreen;
}
@media (max-width: 680px) {
          font-size: 8px;
}
`;
const Dollor = styled(AttachMoneyIcon)`
background: transparent;
color: whitesmoke;
:hover{
  color: lightgreen;
}
@media (max-width: 680px) {
          font-size: 8px;
}
`;

const Logo = styled(Link)`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  text-decoration: none;
  background: transparent;
  display: inline-block;
  span{
    color: rgb(249, 249, 249);
      font-size: 22px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      border: 1px solid whitesmoke;
      background: transparent;
      padding: 2px 5px;
      white-space: nowrap;
      position: relative;
      transition: all 0.5s ease 0s;

  &:hover{
    background: #fff;
    color: #000;
  }
  }
  img {
    display: block;
    width: 100%;
    background: transparent;
    @media (max-width: 680px) {
        
        width: 70%;
}
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  background: transparent;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a{
    display: flex;
    text-decoration:none;
    align-items: center;
    padding: 0 12px;
    background: transparent;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      background: transparent;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
      @media (max-width: 680px) {
          font-size: 8px;
          display: none;
          margin-right: -15px;
}
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        
      }
    }
  }

 @media (max-width: 680px) {
    //display: none;
    margin-left: -20px;
  }
`;

const Login = styled.span`
border-radius: 5px;
border: 1px solid #000;
font-size: 18px;
cursor: pointer;
color: whitesmoke;
background: transparent;
letter-spacing: 1.5px;
font-weight: normal;
padding: 8px 15px;
transition: all 0.3s ease 0s;

  &:hover{
    background: #fff;
    color: #000;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;

  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  user-select: none;
  font-size: 12px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  cursor: pointer;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    background: transparent;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      border: 1px solid lightgreen;
      color: white;
    }
  }
`;