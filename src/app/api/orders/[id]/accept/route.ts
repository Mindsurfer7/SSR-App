import { fakeOrders } from "@/src/DataBase/fake";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const cutURL = new URL(req.url).pathname.split("/");
    const id = cutURL[3];

    const order = fakeOrders.find((ord) => ord.id === id);
    if (order) {
      return NextResponse.json({
        id: id,
        data: order,
      });
    } else {
      return NextResponse.json(
        { message: `Заявка с ID ${id} не найдена.` },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error("Error handling request:", err);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
