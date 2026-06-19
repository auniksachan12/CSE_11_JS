// Derived Class

class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.05; // 5%
        System.out.println("Savings Account Interest: " + interest);
    }
}