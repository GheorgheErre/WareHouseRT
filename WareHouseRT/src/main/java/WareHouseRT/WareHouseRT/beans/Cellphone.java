package WareHouseRT.WareHouseRT.beans;

public class Cellphone extends Article {

	private String imeiCode;
	private String operator;
	private String phoneNumber;
	private String rateTypology;

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
