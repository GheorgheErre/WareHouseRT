package WareHouseRT.WareHouseRT.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * 
 * Class that represents articles stored in the Warehouse. Contains commons data
 * shared trough Article and Component classes.
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
				@JsonSubTypes.Type(value = CPU.class, name = "Cpu"),
				@JsonSubTypes.Type(value = GPU.class, name = "Gpu"),
				@JsonSubTypes.Type(value = HDD.class, name = "Hdd"),
				@JsonSubTypes.Type(value = OperativeSystem.class, name = "OperativeSystem"),
				@JsonSubTypes.Type(value = PowerSupplie.class, name = "PowerSupplie"),
				@JsonSubTypes.Type(value = RAM.class, name = "Ram"),
				@JsonSubTypes.Type(value = Software.class, name = "Software"),
				@JsonSubTypes.Type(value = SSD.class, name = "Ssd"),
				@JsonSubTypes.Type(value = GenericArticle.class, name = "GenericArticle")})
public abstract class Product {
	

	private String identifier;
	private String users;
	private String brand;
	private String model;
	private String serialNumber;
	private String location;
	private String userNumber;

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public String getUsers() {
		return users;
	}

	public void setUsers(String users) {
		this.users = users;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getUserNumber() {
		return userNumber;
	}

	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}
	
	@Override
	public String toString() {
		return "Product [identifier=" + identifier + ", users=" + users + ", brand=" + brand + ", model=" + model
				+ ", serialNumber=" + serialNumber + ", location=" + location + ", userNumber=" + userNumber + "]";
	}
}
