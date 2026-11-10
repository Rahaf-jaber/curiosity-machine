import { ArrowUpRight} from 'lucide-react'

function CategoryCard({
  number,
  title,
  description,
  color,
  icon: Icon,
  linkText,
  onClick
}) {
  return (
    <div
      className="category-card"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="card-top">
        <Icon size={25} strokeWidth={1.5} />
        <span className="category-number">{number}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="category-link">
        {linkText} <ArrowUpRight size={17} />
      </span>
    </div>
  )
}

export default CategoryCard
