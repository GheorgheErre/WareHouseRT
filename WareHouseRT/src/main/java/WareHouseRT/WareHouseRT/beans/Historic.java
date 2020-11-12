package WareHouseRT.WareHouseRT.beans;

import java.util.Date;

public abstract class Historic {

	private Date date;

	private String note;

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
