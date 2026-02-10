"use client"

import { ReactNode } from "react"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth-context"
import ProtectedLayout from "@/components/layout/protected-layout"

interface AdminLayoutProps {
  children: ReactNode
}

export default function Layout({ children }: AdminLayoutProps) {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return <ProtectedLayout role="admin">{children}</ProtectedLayout>
}
