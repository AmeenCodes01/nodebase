import { LoginForm } from '@/features/auth/components/login-form'
import { requireAuth } from '@/lib/auth-utils'
import React from 'react'

async function Page() {
  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default Page