import { ModeToggle } from "@/components/mode-toggle";
import AddExpense from "./_components/add-expense";
import { Expense } from "@/types/expense";
import ExpensesTable from "./_components/expenses-table";
import LogoutButton from "@/components/logout-button";
import { db } from "@/services/db";

async function getExpenses() {
  const res = await db.collection<Expense>("expenses").getFullList();
  return res;
}

export default async function DashboardPage() {
  const expenses = await getExpenses();

  return (
    <div className="h-full container relative flex flex-col gap-4">
      <div className="w-100 flex justify-end items-center gap-2 py-8">
        <LogoutButton />
        <ModeToggle />
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-xl">Dashboard</h1>
        <AddExpense />
      </div>

      <ExpensesTable expenses={expenses} />
    </div>
  );
}
