import styled from "styled-components";
import google from './google.png';
import emko from './photos/emko.png';
import emk from './photos/emk.png';
import { auth, provider } from "../firebase";

const Login = () => {
    return (
        <Main>
                    <Border>
                                <img src={emk} alt='logo'/>
                                <h3>'s Trading View</h3>
                            <Google onClick={()=>
                                auth.signInWithPopup(provider).then(result =>
                                  console.log(result)
                                    ).catch(
                                  error => alert(error.message)
                                )
                            }>
                            <img src={google}  alt="google"/>   
                            <span>Sign in with Google</span>                              
                            </Google>
                            <Line>
                            <h4>* Try our Multichart Experience</h4>
                            </Line>
                    </Border>
        </Main>
    )
}

export default Login;

const Main= styled.div`
    //margin-top: 70px;
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: center;
`;
 
const Border = styled.div`
    //border: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items:center;
    box-shadow: 7px 9px 25px 5px black;
    justify-content: center;
    padding: 40px;
   &img{
       margin-bottom: 20px;
   }
   h3{
       color: white;
       position: relative;
       left: 50px;
       font-weight: normal;
       margin-bottom: 1.5rem;
   }
   @media (max-width: 768px) {
    padding: 20px;
}
`;
const Google= styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
border: 1px solid blue;
margin:0 40px;
user-select: none;
cursor: pointer;
padding: 10px 20px;
img{
   // height: 30px;
    width: 30px;
    display: flex;
    align-items:center;
    object-fit: contain;
}
span{
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
    color: white;
}
&:hover{
    background: white;
    img,span{
        color:black;
        background: white;
    }
}
`;
const Line = styled.div`
margin-top: 40px;
width: 100%;
 border-top: 1px solid rgba(255,255,255,0.3);
h4{
    margin-top: 2rem;
    color: white;
    text-align: center;
    font-weight: lighter;
    opacity: 0.3;
    letter-spacing: 1.2px;
    margin-bottom: 1rem;
}
`;