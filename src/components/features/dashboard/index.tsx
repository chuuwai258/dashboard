import Header from '#/components/layout/header'

import VisitorsChat from './components/visitors-chart'
import {
  ProductCard,
  StatesCard,
} from '#/components/features/dashboard/components/statesCard'
import DataTable from '#/components/payments/data-table'
import { columns, data } from '#/components/payments/column'

const Dashboard = () => {
  return (
    <>
      {/* header */}
      <div>
        <Header />
      </div>

      {/* Card */}
      <div className="p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
          {ProductCard.map((item, idx) => (
            <StatesCard key={idx} item={item} />
          ))}
        </div>

        {/* Area Chart */}
        <div className="mt-8">
          <VisitorsChat />
        </div>
      </div>

      <div className="w-full overflow-x-auto lg:overflow-visible">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default Dashboard
