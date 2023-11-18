import { NextRequest, NextResponse } from "next/server";
import { fakeOrders } from "../../../DataBase/fake";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url ? req.url : "");
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);
  const status = searchParams.get("filt");

  const filteredOrders =
    status === "Выберите статус"
      ? fakeOrders
      : fakeOrders.filter((order) => order.status === status);

  const paginatedOrders = filteredOrders.slice(offset, offset + limit);

  try {
    return NextResponse.json({
      orders: paginatedOrders,
      totalCount: filteredOrders.length,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
