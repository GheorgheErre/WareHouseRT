package WareHouseRT.WareHouseRT.payload.request;

import WareHouseRT.WareHouseRT.beans.Product;

public class DeleteRequest {

	private Product product;
	private String note;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
