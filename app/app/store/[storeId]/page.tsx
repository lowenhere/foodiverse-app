"use client"
import { useParams } from 'next/navigation'

import { useQuery } from "@tanstack/react-query";

import SpinnerPage from "@/components/SpinnerPage";
import ErrorPage from '@/components/ErrorPage';
import { StoreData } from '@/app/api/store/[store_id]/route'


export default function StorePage() {
  const { storeId } = useParams();

  const { isPending, error, data } = useQuery<StoreData>({
    queryKey: ["store", storeId],
    queryFn: async () => {
      const res = await fetch(`/api/store/${storeId}`);
      if (res.status !== 200){
        throw new Error(`HTTP ${res.status} ${res.statusText}`)
      }

      return await res.json();
    },
  })

  if (isPending){
    return (
      <SpinnerPage>
        <p>Loading Store ...</p>
      </SpinnerPage>
    )
  }

  if (error) {
    return (
      <ErrorPage message={error.message}/>
    )
  }

  return <div>Store has {data.items.length} items</div>;
}
