import type { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Check, Loader, MoreHorizontal } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'

export type Payment = {
  id: string
  header: string
  sectionType: string
  status: 'In Process' | 'Done'
  target: number
  limit: number
  reviewer: string
}

export const data: Payment[] = [
  {
    id: '1',
    header: 'Cover page',
    sectionType: 'Cover page',
    status: 'In Process',
    target: 18,
    limit: 5,
    reviewer: 'Eddie Lake',
  },
  {
    id: '2',
    header: 'Table of contents',
    sectionType: 'Table of contents',
    status: 'Done',
    target: 29,
    limit: 24,
    reviewer: 'Eddie Lake',
  },
  {
    id: '3',
    header: 'Executive summary',
    sectionType: 'Narrative',
    status: 'Done',
    target: 10,
    limit: 13,
    reviewer: 'Eddie Lake',
  },
  {
    id: '4',
    header: 'Technical approach',
    sectionType: 'Narrative',
    status: 'Done',
    target: 27,
    limit: 23,
    reviewer: 'Jamik Tashpulatov',
  },
  {
    id: '5',
    header: 'Design',
    sectionType: 'Narrative',
    status: 'In Process',
    target: 2,
    limit: 16,
    reviewer: 'Jamik Tashpulatov',
  },
  {
    id: '6',
    header: 'Capabilities',
    sectionType: 'Narrative',
    status: 'In Process',
    target: 20,
    limit: 8,
    reviewer: 'Jamik Tashpulatov',
  },
  {
    id: '7',
    header: 'Integration with existing systems',
    sectionType: 'Narrative',
    status: 'In Process',
    target: 19,
    limit: 21,
    reviewer: 'Jamik Tashpulatov',
  },
  {
    id: '8',
    header: 'Project timeline',
    sectionType: 'Planning',
    status: 'Done',
    target: 35,
    limit: 20,
    reviewer: 'Eddie Lake',
  },
  {
    id: '9',
    header: 'Budget overview',
    sectionType: 'Financial',
    status: 'In Process',
    target: 12,
    limit: 10,
    reviewer: 'Olivia Martin',
  },
  {
    id: '10',
    header: 'Risk assessment',
    sectionType: 'Analysis',
    status: 'In Process',
    target: 22,
    limit: 18,
    reviewer: 'Noah Williams',
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      )
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'header',
    header: () => <Button variant="ghost">Header</Button>,
  },
  {
    accessorKey: 'sectionType',
    header: 'Section Type',
    cell: ({ row }) => {
      const sectionType = row.getValue('sectionType') as string

      return (
        <span className="rounded-full border px-3 py-1 text-xs text-slate-600">
          {sectionType}
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',

    cell: ({ row }) => {
      const status = row.getValue('status') as string

      return (
        <span
          className={`
          inline-flex items-center gap-1.5
          rounded-full border border-gray-200 bg-white
          px-3 py-1 text-xs font-medium
          ${status === 'In Process' ? 'text-gray-600' : 'text-gray-700'}
        `}
        >
          {status === 'In Process' ? (
            <Loader className="size-3 text-gray-500 animate-spin" />
          ) : (
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500">
              <Check className="h-2 w-2 text-white" />
            </span>
          )}

          {status}
        </span>
      )
    },
  },

  {
    accessorKey: 'target',
    header: 'Target',
  },
  {
    accessorKey: 'limit',
    header: 'Limit',
  },
  {
    accessorKey: 'reviewer',
    header: 'Reviewer',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Edit</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Make a copy
            </DropdownMenuItem>

            <DropdownMenuItem>Favourite</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
