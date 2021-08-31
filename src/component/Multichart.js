import styled, { ThemeConsumer } from 'styled-components';
import TradingViewWidget from 'react-tradingview-widget';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import Filter4Icon from '@material-ui/icons/Filter4';

function Multichart() {
        const [symbols, setSymbols] = useState(
            ["BINANCE:BTCUSDT",
             "BINANCE:ETHUSDT", 
             "BINANCE:BNBUSDT",
             "BINANCE:MATICUSDT"
            ]);
        const [nchart, setNchart] = useState("2");
        console.log(symbols);
        console.log(nchart);
    return (
        <div>
                <Nav>
                         <Logo to="/home">
                        <Home/>
                        <span>HOME</span>
                        </Logo>
                        <Menu>
                            <span onClick={ ()=> setNchart(2)}> 1 x 2</span>
                            <span onClick={ ()=> setNchart(4)}> 2 x 2</span>
                        </Menu>
                </Nav>
        <Main>      
                {
                    symbols.filter((items,idx) => idx < nchart )
                    .map(symbol => (
                        <Charts>
                        <TradingViewWidget 
                            symbol={symbol}
                            theme="dark"
                            autosize="true"                   
                            interval= "60"
                            timezone= "Asia/Kolkata"
                            style= "1"
                            locale= "en"
                            toolbar_bg="#f1f3f6"
                            hide_side_toolbar= "false"
                            allow_symbol_change= "true"    
                            />
                    </Charts>
                    ))
                }
        </Main>
       </div>
    )
}

export default Multichart;

const Main = styled.div`
 //margin-top: 40px;
  color: brown;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  //grid-gap: 55px;
  //gap: 25px;
  min-height: 100vh;
  height: 50%;
`;
const Charts = styled.div`
 border: 2px solid black;
:hover{
    border: 2px solid yellow;
}

`;
const Nav = styled.div`
     height: 30px;
    color: white;
    z-index:3;
    display: flex;
    align-items: center;
    //justify-content: space-between;
`;
const Logo = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: whitesmoke;
margin-left:10px;
padding-right: 30px;
`;
const Menu= styled.div`
width: 100%;
display: flex;
align-items: center;

//justify-content: space-evenly;
 span{
     border: 1px solid white;
     padding: 0 5px;
     transition: all 0.15s ease-in;
     margin-right: 20px;
     cursor: pointer;

     :hover{
         color: black;
         background: whitesmoke;
     }
 }
`;