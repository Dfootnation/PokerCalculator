import { Player } from "./player";

export class pokerCalculator {
  // aim is to make a project that can count everyones cashouts and distribute the money best at the end.

  // Add ons
  // provide the best way of distributing the cash after the game

  // will provide winning percentage odds based on your hand and cards on the table

  // could save results to a DB to see whos won and lost the most all time
  
  // utils
  public buyIn = (playerBank: number, buyInAmount: number, numberOfBuyIns: number): number => {
    playerBank = playerBank - (buyInAmount * numberOfBuyIns);
    return playerBank;
  }
  
  public cashout = (playerBank: number, finalAmount: number): number => {
    playerBank = playerBank + finalAmount;
    return playerBank;
  }

  // called by a ui for each player to determine what they are owed/owe
  // set params from a ui
  public calculateAmountOwed = (buyInAmount: number, numberOfBuyIns: number, finalAmount: number): number => {
    let cashOwed: number = 0;
    // player buys in set amount to play: can buy in multiple times
    cashOwed = this.buyIn(cashOwed, buyInAmount, numberOfBuyIns);
    // user cashs out and collects their winnings
    cashOwed = this.cashout(cashOwed, finalAmount);
    return cashOwed;
  }

  public addPlayer = (name: string, cash: number, buyIns: number, finalAmount: number): Player => {
    let player: Player = new Player(cash, name, buyIns, finalAmount);

    const amountOwed = this.calculateAmountOwed(
      player.getCash(),
      player.getBuyIns(),
      player.getFinalAmount()
    );
    player.setAmountOwed(amountOwed);
    return player;
  }
}