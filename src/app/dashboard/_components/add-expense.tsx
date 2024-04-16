"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDb } from "@/providers/db-provider";
import { Expense } from "@/types/expense";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddExpense() {
  const { db, user } = useDb();

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await db
      .collection<Expense>("expenses")
      .create({ amount, description, userId: user.id })
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSubmit} id="add-expense-form">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Add expense</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add expense</DialogTitle>
            <DialogDescription>
              Add a new expense to your records.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                value={amount}
                onChange={handleChangeAmount}
                placeholder="Enter amount"
                id="amount"
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                value={description}
                onChange={handleChangeDescription}
                id="description"
                placeholder="Paid for groceries..."
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>

            <Button form="add-expense-form" type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
