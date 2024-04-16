"use client";

import Link from "next/link";
import { useState } from "react";
import { Expense } from "@/types/expense";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ExpensesTable({ expenses }: { expenses: Expense[] }) {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Amount</TableHead>
          <TableHead>Description</TableHead>
          {/* <TableHead></TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map(({ amount, description, id }) => (
          <TableRow
            key={id}
            onMouseEnter={() => setHoveredRowId(id)}
            onMouseLeave={() => setHoveredRowId(null)}>
            <TableCell>{amount}</TableCell>
            <TableCell>{description}</TableCell>
            {/* <TableCell justify="end">
              <Link
                href={`/expenses/${expense.id}`}
                className={
                  hoveredRowId === expense.id ? "visible" : "invisible"
                }>
                <IconButton variant="soft">
                  <ArrowRightIcon />
                </IconButton>
              </Link>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
