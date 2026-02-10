"use client"

import { ReactNode } from "react"
import ProtectedLayout from "@/components/layout/protected-layout"

interface LenderLayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LenderLayoutProps) {

  return <ProtectedLayout role="lender">{children}</ProtectedLayout>
}
