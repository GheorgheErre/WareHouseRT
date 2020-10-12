package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cellphone")
public class Cellphone extends Article {
	
	@Transient
	public static final String SEQUENCE_NAME = "cellphone_sequence";

	@Id
	private long id;

	private String imeiCode;
	private String operator;
	private String phoneNumber;
	private String rateTypology;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getImeiCode() {
		return imeiCode;
	}

	public void setImeiCode(String imeiCode) {
		this.imeiCode = imeiCode;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getRateTypology() {
		return rateTypology;
	}

	public void setRateTypology(String rateTypology) {
		this.rateTypology = rateTypology;
	}

}
