import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("online_auction", {
  id: serial("id").primaryKey(),
});
