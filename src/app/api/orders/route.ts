import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { fakeOrders } from "../../../DataBase/fake";

type Status = "in process" | "fulfilled" | "rejected";

export interface Order {
  id: string;
  price: number;
  quantity: number;
  status: Status;
  description?: string;
}

//?lim=1&off=19

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url ? req.url : "");
  const limit = parseInt(searchParams.get("lim") || "10", 10);
  const offset = parseInt(searchParams.get("off") || "0", 10);

  console.log(limit, offset);

  const paginatedOrders = fakeOrders.slice(offset, offset + limit);

  return NextResponse.json({
    orders: paginatedOrders,
    totalCount: paginatedOrders.length,
  });
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {

//   return NextResponse.json({
//    /orders: fakeOrders,
//   });
// }

// Мок логик для пагинации
//   const paginatedOrders = fakeOrders.slice(Number(offset), Number(offset) + Number(limit));

//   res.status(200).json({
//     orders: paginatedOrders,
//     totalCount: fakeOrders.length,
//   });
