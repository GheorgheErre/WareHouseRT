package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Keyboard extends Article{
	
	@Transient
	public static final String SEQUENCE_NAME = "keyboard_sequence";

	@Id
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
