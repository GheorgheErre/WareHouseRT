package WareHouseRT.WareHouseRT.beans;

import java.util.List;

public class WorkStation {
	private String officeLocation;

	private List<Article> articles;

	public String getOfficeLocation() {
		return officeLocation;
	}

	public void setOfficeLocation(String officeLocation) {
		this.officeLocation = officeLocation;
	}
	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}
}
