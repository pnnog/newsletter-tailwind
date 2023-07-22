import Tag from "../Tag"

const Article = ({title, text, image, alt, tags}) =>{

  return(
    <article className="article-card">

      {!!title && <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold mb-4">{title}</h3>}

      {!!tags && 
        <div className="mb-4 self-end hidden sm:flex gap-2 ">
          {tags.map(tag => <Tag text={tag} />)}
        </div>
      }
      
      {!!text && 
        <div className="flex flex-col gap-3">
          {text.map((content, index)=> (
            <p key={index} className={`text-alura-200 dark:text-gray-400 ${!!image && 'line-clamp-3'}`}>
              {content}
            </p>
          ))}
        </div>
      }
     {!!image &&
      <img src={`/assets/images/${image}`} alt={alt} className="mt-4 sm:p-4 sm:mt-0 " />}
    </article>
  )
}

export default Article