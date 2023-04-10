import { useCompanyExperience, CompanyExperiencePros } from "./hooks/useCompanyExperience"

export const CompanyExperience = (props: CompanyExperiencePros) => {
  const { companyName, role, duration, descriptionPartOne, descriptionPartTwo } = useCompanyExperience(props)

  return (
    <div className="grid grid-rows-1 h-full place-items-center">
      <div className="mb-8 w-3/4">
        <h1 className="text-4xl font-black tracking-wider mb-4">{companyName}</h1>
        <p className="text-sm mb-1">{role}</p>
        <p className="opacity-60 text-sm mb-4">{duration}</p>
        <p className="mb-4 leading-7">{descriptionPartOne}</p>
        <p className="leading-7">{descriptionPartTwo}</p>
      </div>
    </div>
  )
}
