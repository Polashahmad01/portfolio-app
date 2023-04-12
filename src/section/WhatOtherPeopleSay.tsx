import { WhatOtherPeopleSayContent } from "../components/WhatOtherPeopleSayContent"
import { WhatOtherPeopleSaySlide } from "../components/WhatOtherPeopleSaySlide"

export const WhatOtherPeopleSay = () => {

  return (
    <div className="bg-black section">
      <div className="px-4 grid  justify-center sm:justify-between sm:grid-cols-2 sm:container sm:items-center sm:gap-11 sm:mx-auto">
        <WhatOtherPeopleSayContent />
        <WhatOtherPeopleSaySlide />
      </div>
    </div>
  )
}
