import { NextRequest, NextResponse } from "next/server";

export type StoreData = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  imgSrc?: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ storeId: string }> },
) => {
  const { storeId } = await params;

  try {
    const data = (await import(
      `@/app/api/store/[storeId]/${storeId}.json`
    )) as StoreData;
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({}, { status: 404 });
  }
};
