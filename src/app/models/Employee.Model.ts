import { Expense } from "./Expense.Model";

export interface Employee{
    id: number;
    name: string;
    contact: string;
    address: string;
    genderId: number;
    expense: Expense[];
}