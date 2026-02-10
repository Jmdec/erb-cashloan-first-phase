"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"

export default function SettingsPage() {
  const router = useRouter()
  const { user, authenticated } = useAuth()

  useEffect(() => {
    if (!authenticated) {
      router.push("/")
    }
  }, [authenticated, router])

  const getRoleSettings = () => {
    switch (user?.role) {
      case "admin":
        return router.push("/admin/settings")
      case "lender":
        return router.push("/lender/settings")
      case "borrower":
        return router.push("/borrower/settings")
      default:
        return router.push("/borrower/settings")
    }
  }

  if (!authenticated) return null

  return getRoleSettings()
}
