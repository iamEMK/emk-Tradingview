import styled from 'styled-components';
import dvptool from './photos/dvptool.jpg';

const Forex = () => {
    return (
        <Main>
            <Work>
            <img src={dvptool} alt="" />
            <h1> Under Contruction</h1>
            </Work>
        </Main>
    )
}

export default Forex;

const Main = styled.div`
min-height: 100vh;
display: flex; 
align-items: center;
justify-content: center;

`;

const Work = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
border: 1px solid black;
img{
    display: block;
    height:50px;
    width: 50px;
    margin-right: 20px;
}
h1{
    letter-spacing: 1.2px;
    font-weight: normal;
}
`;