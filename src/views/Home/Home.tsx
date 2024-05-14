import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Balances from './components/Balances'
import { Input } from '@material-ui/core';
import * as bsc from '@binance-chain/bsc-use-wallet'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import usePresale from '../../hooks/usePresale'
import { deposit } from '../../presale/utils'
import { useMediaQuery } from 'react-responsive'
import Value from '../../components/Value'
import Countdown from 'react-countdown'
import ERC20ABI from '../../presale/lib/abi/presaleErc20.json'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import Binance from 'binance-api-node'
import mainImg from '../../assets/img/icon.png'
import checkImg from '../../assets/img/checkicon.png'
import bnbImg from '../../assets/img/bnb-logo.png'
import HomeCountdown from '../../components/Countdown/HomeCountdown'
import useApproveStaking from '../../hooks/useApproveStaking'

const binance = Binance()

let startTime = new Date()
let endTime = new Date('06/30/2023 20:00')
let launchTime = Math.abs(startTime.getTime() - endTime.getTime())

const Home: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const [tokenNumbers, setTokenNumbers] = useState(0);
  const [tokenPrice, setNum] = useState(0)
  const [price, setPrice] = useState(0);
  const [usdcAmount, setValue] = useState(0);

  const getBnbPrice = async () => {
    let ticker = await binance.prices({ symbol: 'BNBUSDT' })
    let price = Number(ticker['BNBUSDT'])
    setNum(price / 1000000)
  }
  getBnbPrice()

  const { account }: { account: any } = bsc.useWallet()

  const wallet = bsc.useWallet()

  let description = <div style={{ textAlign: 'center', fontSize: '20px', fontFamily: 'Optima', color: 'black', lineHeight: '48px' }}>
    <span>Select the package:</span>
  </div>;

  const [leftTime, setCountTime] = useState(0)

  const web3 = new Web3(new Web3.providers.HttpProvider("https://ethereum-goerli.publicnode.com"));
  const presaleContract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, '0xd77A509F3a72d9f63a9BAa2BA9439864731C50a0');
  const [isFrom, setIsFrom] = useState(true)

  // const getLeftTime = async () => {
  //   const leftTimeNum = await presaleContract.methods.getLeftTimeAmount().call();
  //   setCountTime(new BigNumber(leftTimeNum).toNumber() * 1000)
  // }
  // getLeftTime()

  const [depositInput, setDepositNum] = useState(0)
  const [outPut, getOutPut] = useState(0)
  // const { onApprove } = useApproveStaking()

  let depositVal: any;
  let outPutVal;

  const depositInputChange = (e: any) => {
    setIsFrom(true)
    depositVal = e.target.value;
    outPutVal = depositVal * 30536000;
    setDepositNum(depositVal)
    getOutPut(outPutVal)
  }

  const outPutChange = (e: any) => {
    setIsFrom(false)
    outPutVal = e.target.value;
    depositVal = outPutVal / 30536000;
    getOutPut(outPutVal)
    setDepositNum(depositVal)
  }

  const presale = usePresale();

  const depositEther1 = () => {
    deposit(presale, account, 69, 369)
  };

  const depositEther2 = () => {
    deposit(presale, account, 139, 639)
  };

  const depositEther3 = () => {
    deposit(presale, account, 299, 999)
  };


  const setPackage1 = () => {
    setValue(369);
    setPrice(5.34);
    setTokenNumbers(369 / 5.34);
  };

  const setPackage2 = () => {
    setValue(639);
    setPrice(4.59);
    setTokenNumbers(639 / 4.59)
  };

  const setPackage3 = () => {
    setValue(999);
    setPrice(3.34);
    setTokenNumbers(999 / 3.34)
  };

  const deadline = new Date("2023-06-30T20:00:00Z");
  const base = new Date("2023-06-01T20:00:00");

  return (
    <div>
      <Page>
        <div style={{ display: isDesktopOrLaptop ? "grid" : "block", gridGap: 20 }}>
          <div></div>
          <PageHeader
            // icon={<img style={{ width: 150 }} src={mainImg} />}
            title="Token Presale"
            // subtitle={wallet.account}
            tokenAddress='0x059715169f863024595803Ab04b55810F172B1a0'
          />
        </div>
        {/* <StyledContainerR> */}
        <div>
          {description}
        </div>
        <StyledPackagePanel>
          <StyledPackage>
            <span className="setPackage">369 USDC</span>
            <div style={{ display: "flex", marginTop: "20px", height: "200px", flexDirection: "column", alignItems: "baseline", width: "100%", color: "black", borderRadius: "8px", padding: "5px" }}>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives Protium farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives PoStorage farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 69USDT in $GSOI.</span>
            </div>
            <div style={{ marginTop: "30px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span>You will get:</span>
            </div>
            <div style={{ marginTop: "10px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>69 $GSOI</span>
              <span style={{ fontSize: "20px" }}> (5.34 USDC per token)</span>
            </div>
            <div style={{ marginTop: '15px', display: "flex", justifyContent: "center" }}>
              {/* <Button disabled={!account} text="Buy Tokens" onClick={depositEther} variant="secondary" /> */}
              <button className="depositBtn" disabled={!account} onClick={depositEther1} style={{ borderRadius: "8px", width: "150px", height: "40px", fontSize: "20px" }}>Buy Tokens</button>
            </div>
          </StyledPackage>
          <StyledPackage>
            <span className="setPackage" >639 USDC</span>
            <div style={{ display: "flex", marginTop: "20px", height: "200px", flexDirection: "column", alignItems: "baseline", width: "100%", color: "black", borderRadius: "8px", padding: "5px" }}>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives Protium farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives PoStorage farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 139USDT in $GSOI.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 1 CO2 Certificate Voucher.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 1 Exclusive NFT (Non-Fungible Token)</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 1 Priority Support Ticket.</span>
            </div>
            <div style={{ marginTop: "30px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span>You will get:</span>
            </div>
            <div style={{ marginTop: "10px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>139 $GSOI</span>
              <span style={{ fontSize: "20px" }}> (4.59 USDC per token)</span>
            </div>
            <div style={{ marginTop: '15px', display: "flex", justifyContent: "center" }}>
              {/* <Button disabled={!account} text="Buy Tokens" onClick={depositEther} variant="secondary" /> */}
              <button className="depositBtn" disabled={!account} onClick={depositEther2} style={{ borderRadius: "8px", width: "150px", height: "40px", fontSize: "20px" }}>Buy Tokens</button>
            </div>
          </StyledPackage>
          <StyledPackage>
            <span className="setPackage" >999 USDC</span>
            <div style={{ display: "flex", marginTop: "20px", height: "200px", flexDirection: "column", alignItems: "baseline", width: "100%", color: "black", borderRadius: "8px", padding: "5px" }}>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives Protium farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives PoStorage farming for 3 months.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 299USDT in $GSOI.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 3 CO2 Certificate Voucher.</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 3 Exclusive NFT (Non-Fungible Token)</span>
              <span><img src={checkImg} alt="" width="20" height="20" style={{ marginRight: "5px" }} /> Receives 3 Priority Support Ticket.</span>
            </div>
            <div style={{ marginTop: "30px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span>You will get:</span>
            </div>
            <div style={{ marginTop: "10px", color: "black", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>299 $GSOI</span>
              <span style={{ fontSize: "20px" }}> (3.34 USDC per token)</span>
            </div>
            <div style={{ marginTop: '15px', display: "flex", justifyContent: "center" }}>
              {/* <Button disabled={!account} text="Buy Tokens" onClick={depositEther} variant="secondary" /> */}
              <button className="depositBtn" disabled={!account} onClick={depositEther3} style={{ borderRadius: "8px", width: "150px", height: "40px", fontSize: "20px" }}>Buy Tokens</button>
            </div>
          </StyledPackage>
        </StyledPackagePanel>
        {/* </StyledContainerR> */}
      </Page>
    </div>
  )
}

const StyledPackage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 8px;
  margin: 15px 15px;
  width: 310px;
`

const StyledContainer = styled.div`
  background: #1f0503;
  box-sizing: border-box;
  margin: auto;
  max-width: 456px;
  width: 100%;
  height: 475px;
  padding: 20px;
  position: relative;
  border: 2px solid #ffffff;
  border-radius: 20px;
  font-family: "Nunito";
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  @media (max-width: 767px) {
    // width: auto;
    // padding: 0px;
    // left: 0;
  }
`
const StyledPackagePanel = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column !important;
  }
`

const StyledContainerR = styled.div`
  background: #ebf6f8;
  box-sizing: border-box;
  margin: 0px;
  max-width: 900px;
  width: 100%;
  padding: 20px;
  // position: relative;
  border: 2px solid #999af7;
  border-radius: 20px;
  font-family: "Nunito";
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  // margin: auto 0 0 auto;
  padding: 48px 56px;
  // background: linear-gradient(108.1deg, #b84c4f, #751113 48.54%, #751113);
  // background-color: #751113;
  color: white;
  font-family: "Nunito";
  min-height: 330px;
  vertical-align: middle;
  @media (min-width: 768px) and (max-width: 1023) {
    max-width: 900px;
    margin-top:30px;
    padding: 48px 20px;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    max-width: 400px;
    margin-top:30px;
    padding: 48px 20px;
  }
  @media (min-width: 375px) and (max-width: 424px) {
    max-width: 360px;
    margin-top:30px;
    padding: 48px 20px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    max-width: 310px;
    margin-top:30px;
    padding: 48px 20px;
  }
`

export default Home
