interface ToolsProps {
  title: string;
  icon: string;
  items: string[];
}

export const Tools = (props: ToolsProps) => {
  const { title, items, icon } = props

  return (
    <div className="flex flex-col justify-center gap-8 items-center mt-8 sm:mt-14">
      <div>
        <div className="mb-8">        
          <img className="h-20 w-20 sm:h-32 sm:w-32" src={icon} alt={title}/>
        </div>
        <h2 className="text-lg font-bold tracking-wider mb-4 sm:text-2xl">{title}</h2>
        <ul className="mb-8 sm:mb-0">
          {items.map((item: string, index: number) => (
            <li
              className=" text-sm my-1 font-normal sm:text-base sm:font-medium"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
