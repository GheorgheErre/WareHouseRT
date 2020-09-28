package it.rt.warehouse.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "powerSupplie")
public class PowerSupplie {

	@Id
	private int id;
	private String name;
	private int watts;
	private String energyRating;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
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
