package WareHouseRT.WareHouseRT.beans;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "computer")
public abstract class Computer extends Article{

	private List<Component> components;

	public List<Component> getComponents() {
		return components;
	}

	public void setComponents(List<Component> components) {
		this.components = components;
	}

}
