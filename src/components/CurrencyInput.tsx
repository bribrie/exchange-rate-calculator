import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 3em;
  font: inherit;
`;

const InputContainer = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 0.3em;
  text-align: right;
`;

const SelectContainer = styled.select`
  width: 18%;
  height: 100%;
  margin-left: 2%;
  text-align: center;
`;

interface Props {
  countryOptions: string[];
  selectedCountry: string;
  onChangeCountry: React.ChangeEventHandler<HTMLSelectElement>;
  amount?: number | string;
  onChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
  min?: number;
}

const Input = ({
  countryOptions,
  selectedCountry,
  onChangeCountry,
  amount,
  onChangeAmount,
  min,
}: Props) => {
  return (
    <Wrapper>
      <InputContainer
        min={min}
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <SelectContainer value={selectedCountry} onChange={onChangeCountry}>
        {countryOptions.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </SelectContainer>
    </Wrapper>
  );
};

export default Input;
