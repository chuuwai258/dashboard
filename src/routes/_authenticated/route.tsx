import MainLayout from '#/components/layout/main-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: MainLayout,
})


