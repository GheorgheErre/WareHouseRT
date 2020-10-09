package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.repository.MonitorRepository;

@Service
public class MonitorService {
	
	@Autowired
	private MonitorRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Monitor monitor) {
		monitor.setId(sequenceService.getNextSequence(Monitor.SEQUENCE_NAME));
		repo.save(monitor);
		
	}

	public List<Monitor> findAll() {
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
