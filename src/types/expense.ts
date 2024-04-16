export type Expense = {
  id: string;
  userId: string;

  created: string;
  updated: string;

  amount: number;
  description?: string;
};
