package WareHouseRT.WareHouseRT.beans;

import java.util.Date;


public abstract class Historic {


	private Date date;
	private String action;
	private String note;

	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
