package WareHouseRT.WareHouseRT.beans;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "computer")
public abstract class Computer extends Article {

	private String cpu;
	private String gpu;
	private int ram;
	private int hdd;
	private int ssd;
	private int power;

	public String getCpu() {
		return cpu;
	}

	public void setCpu(String cpu) {
		this.cpu = cpu;
	}

	public String getGpu() {
		return gpu;
	}

	public void setGpu(String gpu) {
		this.gpu = gpu;
	}

	public int getRam() {
		return ram;
	}

	public void setRam(int ram) {
		this.ram = ram;
	}

	public int getHdd() {
		return hdd;
	}

	public void setHdd(int hdd) {
		this.hdd = hdd;
	}

	public int getSsd() {
		return ssd;
	}

	public void setSsd(int ssd) {
		this.ssd = ssd;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

//	private List<Component> components;
//
//	public List<Component> getComponents() {
//		return components;
//	}
//
//	public void setComponents(List<Component> components) {
//		this.components = components;
//	}

}
