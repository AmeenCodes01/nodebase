
import { Button } from "@/components/ui/button"
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"
import SignOut from "../features/auth/components/SignOut"

const Page = async()=>{
await requireAuth()
const data = await caller.getUsers()
  return (
    <div className="text-red-200">
      {JSON.stringify(data)}
      <SignOut/>
      </div>
  )
}

export default Page   