package WareHouseRT.WareHouseRT.beans;


/** 
 * 
 * Class that represents other articles that could be stored but they are not categorized as one of the other articles
 * 
 * */
public class GenericArticle extends Article{
	private String articleType;

	public String getArticleType() {
		return articleType;
	}

	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}
}
