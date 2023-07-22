import Grid  from "./Grid";
import Article from "./Article";
import data from '../../json/articles.json'


const ArticleList = () => (

<Grid>
  {!!data && data.map((article => (
    <Article key={article.title} {...article}/>
  )))}
</Grid>

)


export default ArticleList