import { TrendingDown, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../../../ui/card'

export const ProductCard = [
  {
    title: 'Total Revenue',
    Percent: '12.5%',
    price: '$1250.0',
    description: 'Trending up this month',
    footer: 'Visitors for the last 6 months',
    icon: TrendingUp,
  },
  {
    title: 'New Customers',
    Percent: '20%',
    price: '1,234',
    description: 'Down 20% this period',
    footer: 'Acquisition needs attention',
    icon: TrendingDown,
  },
  {
    title: 'Active Accounts',
    Percent: '12.5%',
    price: '45,678',
    description: 'Strong user retention',
    footer: 'Engagement exceed targets',
    icon: TrendingUp,
  },
  {
    title: 'Growth Rate',
    Percent: '4.5%',
    price: '4.5%',
    description: 'Steady performance increase',
    footer: 'Meets growth projections',
    icon: TrendingUp,
  },
]

export const StatesCard = ({
  item,
}: {
  item: (typeof ProductCard)[number]
}) => {
  const Icon = item.icon
  return (
    <Card>
      <CardContent className="space-y-1">
        <div className="flex justify-between ">
          <p className="text-slate-600">{item.title}</p>
          <div className="flex items-center gap-1 border px-1 rounded-xl">
            <Icon className="size-4 text-slate-600" />
            <p className="text-sm">+{item.Percent}</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold">{item.price}</h1>
        <div className="flex gap-2 items-center mt-5">
          <p>{item.description}</p>
          <Icon className="size-4 text-slate-600" />
        </div>
        <p className="text-slate-600">{item.footer}</p>
      </CardContent>
    </Card>
  )
}
