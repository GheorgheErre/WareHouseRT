package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "operative_system")
public class OperativeSystem extends Software {
	@Transient
	public static final String SEQUENCE_NAME = "operative_system_sequence";

}
