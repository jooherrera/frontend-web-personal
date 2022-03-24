const info = [{}]

interface TopicProps {
  title: string
  items: IItems[]
}

interface IItems {
  title: string
  description: string
}

interface SubTopicProps {
  title: string
  description: string
}
export const SubTopic = ({ title, description }: SubTopicProps) => {
  return (
    <div className="Topic__Body">
      <div className="draw">
        <span className="circle"></span>
        <span className="body"></span>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const Topic = ({ title, items }: TopicProps) => {
  return (
    <div className="Topic">
      <div className="Topic__Title">
        <h2>{title}</h2>
      </div>
      {items.map((item, idx) => (
        <SubTopic key={idx} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
