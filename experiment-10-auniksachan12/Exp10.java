public class Exp10 {

    public static void main(String[] args) {

        // Savings Account Object
        SavingsAccount s1 =
                new SavingsAccount(101, "Rahul", 10000);

        System.out.println("----- Savings Account -----");

        s1.deposit(2000);
        s1.displayDetails();
        s1.calculateInterest();

        System.out.println();

        // Current Account Object
        CurrentAccount c1 =
                new CurrentAccount(102, "Anita", 20000);

        System.out.println("----- Current Account -----");

        c1.deposit(3000);
        c1.displayDetails();
        c1.calculateInterest();
    }
}