import { Material } from "./material.model";

export interface Order {
  id: string;
  customerName: string;
  materials: Material[];
  totalAmount: number;
  orderDate: Date;
  status: string;
}