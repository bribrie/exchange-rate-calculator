import styled from "styled-components";
import { memo } from "react";

const Wrapper = styled.div`
  flex: 1 1 auto;
  font: inherit;
  font-size: 0.8rem;
  margin: 1rem 0;
  text-align: right;
`;

const Message = styled.span`
  width: 80%;
  height: 100%;
  color: #485c77;
  text-align: right;
  font-style: italic;
`;

const Button = styled.button`
  border: none;
  width: 18%;
  height: 100%;
  margin-left: 2%;
  font: inherit;
  background-color: transparent;
  color: #ffa000;

  &:hover {
    color: #ffc108;
  }
`;

interface Props {
  message: string;
  swapCountry: React.MouseEventHandler<HTMLButtonElement>;
}

const CurrencyInfo = ({ message, swapCountry }: Props) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
      <Button onClick={swapCountry}>SWAP</Button>
    </Wrapper>
  );
};

export default memo(CurrencyInfo);
