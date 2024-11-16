import { NextRequest, NextResponse } from "next/server";
import data from "@/app/api/store/[store_id]/21.json";

export type StoreData = {
  items: MenuItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  img_src?: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ store_id: string }> },
) => {
  const store_id = (await params).store_id;
  if (store_id !== "21") {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json(data);
};
