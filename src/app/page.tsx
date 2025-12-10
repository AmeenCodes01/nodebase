
import { Button } from "@/components/ui/button"
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"

const Page = async()=>{
await requireAuth()
const data = await caller.getUsers()
  return (
    <div className="text-red-200">
      {JSON.stringify(data)}
      </div>
  )
}

export default Page   