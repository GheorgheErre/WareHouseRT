package WareHouseRT.WareHouseRT.beans;

public class Software extends Article {
	private String productKey;
	private Computer associatedComputer;

	public String getProductKey() {
		return productKey;
	}

	public void setProductKey(String productKey) {
		this.productKey = productKey;
	}

	public Computer getAssociatedComputer() {
		return associatedComputer;
	}

	public void setAssociatedComputer(Computer associatedComputer) {
		this.associatedComputer = associatedComputer;
	}
}
