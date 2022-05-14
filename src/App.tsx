import { useEffect, useState } from "react";
import Exchange from "./assets/ExchangeImg.png";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyInfo from "./components/CurrencyInfo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #3e5066;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 75vh;
  background-color: #f1edd6;
  border-radius: 2em;
`;

const Title = styled.h1`
  text-align: center;
  width: 70%;
  color: #3e5066;
`;

const Summary = styled.h5`
  text-align: center;
  color: #3e5066;
  width: 70%;
  margin-top: -0.5em;
`;

const Img = styled.img.attrs({
  src: `${Exchange}`,
})`
  margin-bottom: 0.5em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 1em;
`;

function App() {
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [baseCountry, setBaseCountry] = useState("KRW");
  const [resultCountry, setResultCountry] = useState("USD");
  const [rate, setRate] = useState<number>(0); //base기준으로 result의 환율
  const [amount, setAmount] = useState(1);
  const [isFromAmount, setIsFromAmount] = useState(true);

  // Calculate Rate
  let fromAmount, toAmount;
  if (isFromAmount) {
    fromAmount = amount;
    toAmount = (amount * rate).toFixed(5);
  } else {
    toAmount = amount;
    fromAmount = (amount / rate).toFixed(5);
  }

  const getExchangeRate = async (base: string, result: string) => {
    try {
      const URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API}/latest/${base}`;
      const response = await fetch(URL).then((res) => res.json());
      setCountryOptions([...Object.keys(response.conversion_rates)]);
      setRate(response.conversion_rates[result]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExchangeRate(baseCountry, resultCountry);
  }, [baseCountry, resultCountry]);

  //Amount Change
  const handleFromAmountChange = (e: any) => {
    setAmount(e.target.value);
    setIsFromAmount(true);
  };

  const handleToAmountChange = (e: any) => {
    setAmount(e.target.value);
    setIsFromAmount(false);
  };

  //Swap
  const swapCountry = () => {
    setBaseCountry(resultCountry);
    setResultCountry(baseCountry);
  };

  const MESSAGE = `1 ${baseCountry} = ${rate.toFixed(5)} ${resultCountry} `;

  return (
    <Container>
      <Box>
        <Img alt="exchange icon"></Img>
        <Title>Exchange Calculator</Title>
        <Summary>Select a currency and Enter an amount.</Summary>
        <Main>
          <CurrencyInput
            countryOptions={countryOptions}
            selectedCountry={baseCountry}
            onChangeCountry={(e) => setBaseCountry(e.target.value)}
            amount={fromAmount}
            onChangeAmount={handleFromAmountChange}
            min={1}
          />
          <CurrencyInfo message={MESSAGE} swapCountry={swapCountry} />
          <CurrencyInput
            countryOptions={countryOptions}
            selectedCountry={resultCountry}
            onChangeCountry={(e) => setResultCountry(e.target.value)}
            amount={toAmount}
            onChangeAmount={handleToAmountChange}
          />
        </Main>
      </Box>
    </Container>
  );
}

export default App;
