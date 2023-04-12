import { usePeopleSay, PeopleSayProps } from "./hooks/usePeopleSay"

export const PeopleSay = (props: PeopleSayProps) => {
  const { descriptionPartOne, descriptionPartTwo, imageUrl, imageAlt, nameOfReviewer, role, socialProfile } = usePeopleSay(props)

  return (
    <div className="flex flex-col w-4/5 mx-auto gap-8 justify-center h-full">
      <div className="bg-white text-black mx-4 px-4 py-6 rounded-md">
        <p className="mb-4">{descriptionPartOne}</p>
        <p>{descriptionPartTwo}</p>
      </div>
      <div className="flex items-center gap-6 mx-4">
        <div className="h-20 w-20">
          <img
            className="block rounded-full"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-medium">{nameOfReviewer}</p>
          <p className="text-xs font-medium">{role}</p>
          <div className="h-15 w-15">
            <a 
              href={socialProfile}
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
