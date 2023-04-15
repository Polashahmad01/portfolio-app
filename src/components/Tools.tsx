interface ToolsProps {
  title: string;
  icon: string;
  items: string[];
}

export const Tools = (props: ToolsProps) => {
  const { title, items, icon } = props

  return (
    <div className="flex flex-col justify-center gap-8 items-center mt-14">
      <div>
        <div className="mb-8">        
          <img src={icon} alt={title}/>
        </div>
        <h2 className="text-2xl font-bold tracking-wider mb-4">{title}</h2>
        <ul>
          {items.map((item: string, index: number) => (
            <li
              className="font-medium my-1"
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
