package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ram")
public class RAM extends Component {

	@Transient
	public static final String SEQUENCE_NAME = "ram_sequence";

	@Id
	private long id;
	private String capacity;
	private String frequencies;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	public String getFrequencies() {
		return frequencies;
	}

	public void setFrequencies(String frequencies) {
		this.frequencies = frequencies;
	}

}
