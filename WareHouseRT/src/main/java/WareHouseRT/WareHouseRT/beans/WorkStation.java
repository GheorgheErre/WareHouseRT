package WareHouseRT.WareHouseRT.beans;

import java.util.List;

public abstract class WorkStation {

	private CPU cpu;
	private List<GPU> gpu;
	private List<RAM> ram;
	private List<HDD> hdd;
	private List<SSD> ssd;
	private MotherBoard motherBoard;
	private PowerSupplie powerSupplies;

	public CPU getCpu() {
		return cpu;
	}

	public void setCpu(CPU cpu) {
		this.cpu = cpu;
	}

	public List<GPU> getGpu() {
		return gpu;
	}

	public void setGpu(List<GPU> gpu) {
		this.gpu = gpu;
	}

	public List<RAM> getRam() {
		return ram;
	}

	public void setRam(List<RAM> ram) {
		this.ram = ram;
	}

	public List<HDD> getHdd() {
		return hdd;
	}

	public void setHdd(List<HDD> hdd) {
		this.hdd = hdd;
	}

	public List<SSD> getSsd() {
		return ssd;
	}

	public void setSsd(List<SSD> ssd) {
		this.ssd = ssd;
	}

	public MotherBoard getMotherBoard() {
		return motherBoard;
	}

	public void setMotherBoard(MotherBoard motherBoard) {
		this.motherBoard = motherBoard;
	}

	public PowerSupplie getPowerSupplies() {
		return powerSupplies;
	}

	public void setPowerSupplies(PowerSupplie powerSupplies) {
		this.powerSupplies = powerSupplies;
	}

}
