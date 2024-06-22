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

app.use(express.json());

//Get tables
app.get("/tables", (req, res) => {
  return res.json({ tables: tables });
});

//Create table
app.post("/table", (req, res) => {
  const newTable = req.body.table as Table;

  if (!newTable) {
    console.log("Failed to find table in post");
    return res.status(400).json({ error: "Table not found in request body" });
  }

  const tableIdAlreadyExist = tables.find((table) => table.id == newTable.id);
  if (tableIdAlreadyExist) {
    console.log("Table ID already taken");
    return res.status(422).json({ error: "Table ID already taken" });
  }

  tables.push(newTable);
  console.log("Added new table");

  return res.status(200).json({ message: "Succesfully added new table" });
});


server.listen(3000, () => {
  console.log("server running on 3000");
});
