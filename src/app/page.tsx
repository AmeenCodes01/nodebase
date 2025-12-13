
"use client"
import { Button } from "@/components/ui/button"
import { requireAuth } from "@/lib/auth-utils"
import SignOut from "../features/auth/components/SignOut"
import { useTRPC } from "@/trpc/client"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

const Page = ()=>{
//await requireAuth()
const trpc = useTRPC()
const {data} =useQuery(trpc.getWorkflows.queryOptions())
const queryClient = useQueryClient()
const create =useMutation(trpc.createWorkflow.mutationOptions(
  {
    onSuccess: ()=>{
  toast.success("Job queued")  
    }
  }
))

  return (
    <div className="text-red-200">
      {JSON.stringify(data)}
      <SignOut/>
      <Button disabled={create.isPending} onClick={()=> create.mutate()}>
        Create workflow
      </Button>
      </div>
  )
}

export default Page   