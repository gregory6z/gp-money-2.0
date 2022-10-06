import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nouvelle Opération</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal></NewTransactionModal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
