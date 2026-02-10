"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"

export default function DashboardPage() {
  const router = useRouter()
  const { user, authenticated } = useAuth()

  useEffect(() => {
    if (!authenticated) {
      router.push("/")
    }
  }, [authenticated, router])

  const getRoleDashboard = () => {
    switch (user?.role) {
      case "admin":
        return router.push("/admin/dashboard")
      case "lender":
        return router.push("/lender/dashboard")
      case "borrower":
        return router.push("/borrower/dashboard")
      default:
        return router.push("/borrower/dashboard")
    }
  }

  if (!authenticated) return null

  return getRoleDashboard()
}
