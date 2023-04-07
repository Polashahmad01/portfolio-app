import ReactFullPage from "@fullpage/react-fullpage"
import { Contact } from "../section/Contact"

const anchors = ["about"]

export const FullPageWrapper = () => {

  return (
    <ReactFullPage
      licenseKey={"P6R362EA-G56369Y4-29437F1S-2J963G7"}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      credits={{ enabled: true, label: "full page", position: "right" }}
      render={() => {
        return (
          <>
            <Contact />
          </>
        )
      }}
    />
  )
}
