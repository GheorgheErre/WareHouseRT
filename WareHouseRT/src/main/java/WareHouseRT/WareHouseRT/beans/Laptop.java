package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "laptop")
public class Laptop extends Computer {

	@Transient
	public static final String SEQUENCE_NAME = "laptop_sequence";
	
	@Id
	private long id;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
