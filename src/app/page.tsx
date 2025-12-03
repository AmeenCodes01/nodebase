import prisma from "@/lib/db"

const Page = async()=>{
  const user = await prisma.user.findMany()
  return (
    <div className="text-red-200">
      {JSON.stringify(user)}
    </div>
  )
}

export default Page