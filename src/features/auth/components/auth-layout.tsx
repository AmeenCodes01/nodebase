import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

 function AuthLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <div className='bg-muted flex min-h-svh min-w-screen items-center flex-col justify-center gap-6 p-6 md:p-10'>
            <div className='flex w-full max-w-sm flex-col gap-6 '>
                <Link href="/" className="flex gap-2 self-center items-center">
                    <Image src="/logo.svg" alt="nodebase" height={20} width={20} />
                Nodebase
                </Link>
  {children}
            </div>
  </div>
  )
}

export default AuthLayout