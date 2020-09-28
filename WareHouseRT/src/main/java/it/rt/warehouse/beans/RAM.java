package it.rt.warehouse.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ram")
public class RAM {

	@Id
	private int id;
	private String name;
	private String capacity;
	private String frequencies;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
