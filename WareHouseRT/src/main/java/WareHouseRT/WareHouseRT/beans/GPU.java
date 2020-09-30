package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gpu")
public class GPU {
	
	@Transient
	public static final String SEQUENCE_NAME = "gpu_sequence";
	
	@Id
	private long id;
	private String name;
	private String memory;
	private String baseClock;
	private String maxBoostClock;
	
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
	public String getMemory() {
		return memory;
	}
	public void setMemory(String memory) {
		this.memory = memory;
	}
	public String getBaseClock() {
		return baseClock;
	}
	public void setBaseClock(String baseClock) {
		this.baseClock = baseClock;
	}
	public String getMaxBoostClock() {
		return maxBoostClock;
	}
	public void setMaxBoostClock(String maxBoostClock) {
		this.maxBoostClock = maxBoostClock;
	}
	
	
	

}
