package WareHouseRT.WareHouseRT.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * 
 * Class that represents articles that can be added to a WorkStation type
 * Object.
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY)
@JsonSubTypes({ @JsonSubTypes.Type(value = Laptop.class, name = "Laptop"),
				@JsonSubTypes.Type(value = Keyboard.class, name = "Keyboard"),
				@JsonSubTypes.Type(value = Cable.class, name = "Cable"),
				@JsonSubTypes.Type(value = Monitor.class, name = "Monitor"),
				@JsonSubTypes.Type(value = Desktop.class, name = "Desktop"),
				@JsonSubTypes.Type(value = Cellphone.class, name = "Cellphone"),
				@JsonSubTypes.Type(value = DockingStation.class, name = "DockingStation"),
				@JsonSubTypes.Type(value = GraphicTablet.class, name = "GraphicTablet"),
				@JsonSubTypes.Type(value = Mouse.class, name = "Mouse"),
				@JsonSubTypes.Type(value = Token.class, name = "Token"),
				@JsonSubTypes.Type(value = GenericArticle.class, name = "GenericArticle")})
public class Article extends Product {

}
