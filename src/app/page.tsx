import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Client from './Client';
import { Suspense } from 'react';

const Page = async()=>{
    const queryClient = getQueryClient();
  void queryClient.fetchQuery(trpc.getUsers.queryOptions());
  return (
    <div className="text-red-200">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>loading..</p>}>

        <Client/>
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}

export default Page   