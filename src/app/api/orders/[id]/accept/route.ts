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
  const body = req.json();
  //   const { searchParams } = new URL(req.url ? req.url : "");
  console.log(body);
  console.log(req);

  // const id = searchParams.
  return NextResponse.json({
    lol: "ho2",
  });
}
