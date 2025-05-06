{ 
    //
    class BankAccount { 
       public readonly id: number;
       public name: string;
       protected _balance: number;
    /**
     *
     */
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name =name;
        this._balance = balance;
        //super(id, name, balance);
        
    }
    set deposit(amount : number) { 
        this._balance = this.balance + amount
    }

    get balance() {
        return this._balance;
     }
//     depositMoney(amount: number) { 
//         this._balance = this._balance + amount
//     }
//     getBalance(){ 
//         return this._balance ;
    // }
}

 
  const GoribAccount = new BankAccount(122, "Ibrahim", 500);
   GoribAccount.deposit= 10000;
//   const myCurrentBalance = GoribAccount.getBalance();
//   console.log(myCurrentBalance);
//   const RichAccount = new BankAccount(122, "Rumpa", 50000);

const myCurrentBalance = GoribAccount.balance;
console.log(myCurrentBalance);
    //
}