package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.repository.MonitorRepository;

public class MonitorService {
	
	@Autowired
	private MonitorRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Monitor monitor) {
		monitor.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(monitor);
		
	}

	public List<Monitor> findAll() {
		return repo.findAll();
	}

}
