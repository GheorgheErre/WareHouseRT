package WareHouseRT.WareHouseRT.beans;

/**
 * 
 * Class that represents articles stored in the Warehouse. Contains commons data
 * shared trough Article and Component classes.
 * 
 */
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
