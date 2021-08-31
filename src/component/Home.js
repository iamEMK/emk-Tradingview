import styled from "styled-components";
import TradingViewWidget from 'react-tradingview-widget';
import { SingleTicker } from "react-ts-tradingview-widgets";
import { useState } from "react";
import { Ticker } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";

function Home() {
    const [symbols, setSymbols] = useState(
        ["BINANCE:ETHUSDT", 
         "BINANCE:BNBUSDT",
         "BINANCE:MATICUSDT"
        ]);
    const [watchlist, setWatchlist] = useState([
        "BINANCE:BTCUSDT", 
        "BINANCE:ETHUSDT", 
        "BINANCE:BNBUSDT",
        "BINANCE:MATICUSDT",
        "BINANCE:KSMUSDT",
        "BINANCE:SOLUSDT",
        "BINANCE:NEOUSDT",
        "BINANCE:DOTUSDT",
        "BINANCE:ENJUSDT",
        "BINANCE:VETUSDT",
        "BINANCE:BZRXUSDT",
        "BINANCE:ICXUSDT",
        "BINANCE:RSRUSDT",
        "BINANCE:UNIUSDT",
        "BINANCE:MKRUSDT",
        "BINANCE:ATOMUSDT"
        ]);
        const [tsymbols, setTsymbols] = useState(
            [{
                  "proName": "BITFINEX:BTCUSDSHORTS",
                  "title": "BTC SHORTS"
                },
                {
                  "proName": "BITFINEX:BTCUSDLONGS",
                  "title": "BTC LONGS"
                },
                {
                  "proName": "CRYPTOCAP:BTC.D",
                  "title": "BTC.D"
                },
                {
                  "proName": "BINANCE:SOLUSDT",
                  "title": "SOL USDT"
                }            
            ]);
    return (
        <Main>
                <Leftside>
                            <Achart>
                            <TradingViewWidget 
                            symbol="BINANCE:BTCUSDT"
                            theme="dark"
                            autosize="true"               
                            interval= "60"
                            timezone= "Asia/Kolkata"
                            style= "1"
                            locale= "en"
                            hide_side_toolbar= ""
                            toolbar_bg="#f1f3f6"
                            watchlist = {watchlist}
                            allow_symbol_change= "true"
                            toolbar_bg= "#f1f3f6"
                            withdateranges= "true"               
                            details= "true"
                            
                            />
                            </Achart>
                </Leftside>
                <Rightside> 
                            <Topleft>                 
                            <TickerTape colorTheme="dark" 
                            symbols={tsymbols}
                            isTransparent="true"
                            ></TickerTape>    
                            </Topleft>
                            <Topbottom>
                                        {   
                                            symbols.map(symbol => (
                                                <Sticker>
                                                <SingleTicker 
                                                    symbol={symbol} 
                                                    autosize="true"
                                                    isTransparent="true"
                                                    colorTheme="dark">
                                                </SingleTicker>                             
                                                </Sticker>
                                            ))                            
                                        }                
                            </Topbottom>                                     
                </Rightside>
        </Main>
    )
}
export default Home;

const Main = styled.div`
 height: 83vh;
 margin: 30px;
 margin-top: 90px;
 display: flex;
 @media (max-width: 768px) {
  margin: 20px;
  margin-top: 80px;
}
`;
const Leftside = styled.div`
 flex:2.2;
 border-radius: 5px;
 overflow: hidden;
 margin-right: 1%;
 box-shadow: 7px 11px 25px 5px black;
 transition: all 0.4s ease;
 @media (max-width: 768px) {

}
`;

const Achart = styled.div`
height: 100%;
`;

const Rightside = styled.div`
flex: 0.8;
display: flex;
flex-direction: column;
justify-content: space-evenly;
//::afterborder: 2px solid red;
border-radius: 15px;
overflow: hidden;
//height:100%;
//width:100%;
box-shadow: 7px 9px 25px 5px black;
margin: 5px;
@media (max-width: 768px) {
  display: none;
}
`;

const Topleft = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
/* background: linear-gradient(
    135deg,
    rgba(255, 225, 225, 0.17),
    rgba(255, 255, 255, 0.08)
  );
  backdrop-filter: blur(2rem); */
//justify-content: space-between;
`;
const Topbottom = styled.div`
flex:4;
display: flex;
flex-direction: column;
padding:0 5px 0 5px;
align-items:center;
justify-content: space-between;
padding-bottom: -15px;
`;
const Sticker = styled.div`
margin: 5px;
border-radius: 3px;
overflow: hidden;
`;
const TSticker = styled.div`
margin: 5px;
`;