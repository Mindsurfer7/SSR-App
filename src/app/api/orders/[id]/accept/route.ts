import { fakeOrders } from "@/src/DataBase/fake";
import { Order } from "../../route";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug; // 'a', 'b', or 'c'
// }

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
        {
          error: `Заявка с ID ${id} не найдена.`,
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
