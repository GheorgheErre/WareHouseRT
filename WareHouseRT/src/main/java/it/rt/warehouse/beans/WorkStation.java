package it.rt.warehouse.beans;


public abstract class WorkStation {
	

	private CPU cpu;
	private GPU gpu;
	private RAM ram;
	private HDD hdd;
	private SSD ssd;
	private MotherBoard motherBoard;
	private PowerSupplie powerSupplies;
	
	
	public CPU getCpu() {
		return cpu;
	}
	public void setCpu(CPU cpu) {
		this.cpu = cpu;
	}
	public GPU getGpu() {
		return gpu;
	}
	public void setGpu(GPU gpu) {
		this.gpu = gpu;
	}
	public HDD getHdd() {
		return hdd;
	}
	public void setHdd(HDD hdd) {
		this.hdd = hdd;
	}
	public RAM getRam() {
		return ram;
	}
	public void setRam(RAM ram) {
		this.ram = ram;
	}
	public SSD getSsd() {
		return ssd;
	}
	public void setSsd(SSD ssd) {
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
