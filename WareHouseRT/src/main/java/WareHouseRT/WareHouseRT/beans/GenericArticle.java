package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

/** 
 * 
 * Class that represents other articles that could be stored but they are not categorized as one of the other articles
 * 
 * */
public class GenericArticle extends Article{
	
	@Transient
	public static final String SEQUENCE_NAME = "cable_sequence";

	@Id
	private long id;
	
	private String articleType;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getArticleType() {
		return articleType;
	}

	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}
}
