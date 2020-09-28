package it.rt.warehouse.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gpu")
public class GPU {
	
	@Id
	private int id;
	private String name;
	private String memory;
	private String baseClock;
	private String maxBoostClock;
	
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
