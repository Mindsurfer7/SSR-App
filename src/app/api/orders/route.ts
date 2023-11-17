import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { fakeOrders } from "../../../DataBase/fake";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url ? req.url : "");
  const limit = parseInt(searchParams.get("lim") || "10", 10);
  const offset = parseInt(searchParams.get("off") || "0", 10);
  const status = searchParams.get("filt");

  const filteredOrders =
    status === "Выберите статус"
      ? fakeOrders
      : fakeOrders.filter((o) => o.status === status);

  const paginatedOrders = filteredOrders.slice(offset, offset + limit);

  return NextResponse.json({
    orders: paginatedOrders,
    totalCount: filteredOrders.length,
  });
}
