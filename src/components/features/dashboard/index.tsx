import Header from '#/components/layout/header'

import VisitorsChat from './components/visitors-chart'
import {
  ProductCard,
  StatesCard,
} from '#/components/features/dashboard/components/statesCard'

const Dashboard = () => {
  return (
    <>
      {/* header */}
      <div>
        <Header />
      </div>

      {/* Card */}
      <div className="p-4 ">
        <div className="grid grid-cols-4 w-full gap-5">
          {ProductCard.map((item, idx) => (
            <StatesCard key={idx} item={item} />
          ))}
        </div>

        {/* Area Chart */}
        <div className="mt-8">
          <VisitorsChat />
        </div>
      </div>
    </>
  )
}

export default Dashboard
