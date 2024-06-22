import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

interface Table {
  id: number;
  description?: string;
  orders: Order[];
}

interface Order {
  id: number;
  tableId: number;
  itemIds: number[];
  notes?: string;
}

interface menuItem {
  id: number;
  title: string;
  description: string;
  price: number;
}

const menu: menuItem[] = [
  { id: 1, title: "Rice", description: "Simple white rice", price: 1.5 },
  {
    id: 2,
    title: "Beef teriyaki",
    description: "Delicious beef with traditional teriyaki sauce",
    price: 11.5,
  },
];

const tables: Table[] = [
  {
    id: 1,
    description: "Table by the window",
    orders: [{ id: 1, tableId: 1, itemIds: [1, 2] }],
  },
];


//Get tables
app.get("/tables", (req, res) => {
  return res.json({ tables: tables });
});


server.listen(3000, () => {
  console.log("server running on 3000");
});
