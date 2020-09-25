package it.rt.warehouse.beans;

public class CPU {

	private String name;
	private int core;
	private int threads;
	private String baseClock;
	private String maxBoostClock;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCore() {
		return core;
	}
	public void setCore(int core) {
		this.core = core;
	}
	public int getThreads() {
		return threads;
	}
	public void setThreads(int threads) {
		this.threads = threads;
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
