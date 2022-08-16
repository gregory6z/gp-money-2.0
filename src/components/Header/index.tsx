import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        <NewTransactionsButton>Nova transacao</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
