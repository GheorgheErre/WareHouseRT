package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "powerSupplie")
public class PowerSupplie extends Article{

	@Transient
	public static final String SEQUENCE_NAME = "powerSupplie_sequence";
	
	@Id
	private long id;
	private String name;
	private int watts;
	private String energyRating;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getWatts() {
		return watts;
	}
	public void setWatts(int watts) {
		this.watts = watts;
	}
	public String getEnergyRating() {
		return energyRating;
	}
	public void setEnergyRating(String energyRating) {
		this.energyRating = energyRating;
	}
	
	

}
