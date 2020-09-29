let account = {             // Object
    name: "Mario",          // Properti 1 
    expenses: [],           // Properti 2
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
            // addExpenses itu function. description dan amount adalah argument


    getAccountSummary(){
      let sum = 0;
      this.expenses.forEach((item)=>{
        sum+=item.amount;
      })
      return sum;
    }
            // ini adalah function yang kegunaannya menghitung atau kalkulasi jumlah amount.

};
account.addExpenses("Beli Mobil", 90000000); // deklarasi dari rumah dan harganya
    account.addExpenses("Beli Motor", 15000000); // deklarasi dari rumah dan harganya
        account.addExpenses("Beli Sepeda", 6000000); // deklarasi dari rumah dan harganya
            account.addExpenses("Beli Rumah", 1000000000); // deklarasi dari rumah dan harganya
                console.log("Total pengeluaran" + account.name + "adalah Rp." + account.getAccountSummary()); // output dari pengeluaran