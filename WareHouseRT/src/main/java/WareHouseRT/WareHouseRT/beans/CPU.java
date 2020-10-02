package WareHouseRT.WareHouseRT.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cpu")
public class CPU extends Component{

	@Transient
	public static final String SEQUENCE_NAME = "cpu_sequence";

	@Id
	private long id;

	private String name;
	private int core;
	private int threads;
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
