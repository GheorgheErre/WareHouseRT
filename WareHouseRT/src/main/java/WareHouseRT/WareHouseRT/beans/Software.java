package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Software extends Article {
	
	@Transient
	public static final String SEQUENCE_NAME = "software_sequence";
	
	private String productKey;
	private Computer associatedComputer;
	
	@Id
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

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
