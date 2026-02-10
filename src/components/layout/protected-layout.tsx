"use client"

import { useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export default function ProtectedLayout({ children, role }: { children: ReactNode; role?: string }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    if (!user) {
      router.replace("/login")
      return
    }

    if (role && user.role !== role) {
      router.replace("/login")
    }
  }, [loading, user, role, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return <>{children}</>
}
