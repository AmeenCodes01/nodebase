"use client"

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import React from 'react'

function SignOut() {
  return (
    <Button onClick={async()=>await authClient.signOut()}>SignOut</Button>
  )
}

export default SignOut