export class Player {

  private cash: number;
  private name: string;
  private buyIns: number;
  private finalAmount: number;
  private amountOwed: number;

  constructor (
    cash: number,
    name: string,
    buyIns: number,
    finalAmount: number
  ) {
    this.cash = cash;
    this.name = name;
    this.buyIns = buyIns;
    this.finalAmount = finalAmount;
  }

  public getCash = (): number => {
    return this.cash;
  }

  public setCash = (cash: number): void => {
    this.cash = cash;
  }

  public getName = (): string => {
    return this.name;
  }

  public setName = (name: string): void => {
    this.name = name;
  }

  public getBuyIns = (): number => {
    return this.buyIns;
  }

  public setBuyIns = (buyIns: number): void => {
    this.buyIns = buyIns;
  }

  public getFinalAmount = (): number => {
    return this.finalAmount;
  }

  public setFinalAmount = (finalAmount: number): void => {
    this.finalAmount = this.finalAmount;
  }

  public getAmountOwed = (): number => {
    return this.amountOwed;
  }

  public setAmountOwed = (amountOwed: number): void => {
    this.amountOwed = amountOwed;
  }
}