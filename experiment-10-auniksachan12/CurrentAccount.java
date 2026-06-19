// Derived Class

class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.02; // 2%
        System.out.println("Current Account Interest: " + interest);
    }
}