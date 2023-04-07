import { WhereDidIWorkContent } from "../components/WhereDidIWorkContent"
import { WhereDidIWorkSlide } from "../components/WhereDidIWorkSlide"

export const WhereDidIWork = () => {

  return (
    <div className="bg-black section">
      <div className="grid grid-cols-2 container mx-auto">
        <WhereDidIWorkContent />
        <WhereDidIWorkSlide />
      </div>
    </div>
  )
}
