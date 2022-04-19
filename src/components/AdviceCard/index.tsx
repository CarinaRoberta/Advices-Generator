import React, { useState } from "react";
import { buttonIcon, divider } from "../../assets";
import { getAdvice as getAdviceService, IAdvice } from "../../services/advices";
import { Button, Container, Phrase, Title } from "./styles";

const AdviceCard: React.FC = () => {
  const [advice, setAdvice] = useState<IAdvice>();

  const getAdvice = async () => {
    const response = await getAdviceService();
    setAdvice(response);
  };

  const handleAdviceClick = () => {
    getAdvice();
  };

  if (advice) {
    return (
      <Container>
        <Title>ADVICE #{advice.slip.id}</Title>
        <Phrase>{advice.slip.advice}</Phrase>
        <img src={divider} alt="divisor" />
        <Button onClick={() => handleAdviceClick()}>
          <img src={buttonIcon} alt="icon" />
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <Phrase>Click the button to generate a advice.</Phrase>
        <img src={divider} alt="divisor" />
        <Button onClick={() => handleAdviceClick()}>
          <img src={buttonIcon} alt="icon" />
        </Button>
      </Container>
    );
  }
};

export default AdviceCard;
