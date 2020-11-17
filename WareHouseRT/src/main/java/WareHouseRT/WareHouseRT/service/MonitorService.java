package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public Monitor saveOrUpdate(Monitor entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}
	
	public Monitor save(Monitor monitor) {
		monitor.setId(sequenceService.getNextSequence(Monitor.SEQUENCE_NAME));
		monitor.setIdentifier(createIdentifier.createIdentifier("MON"));
		return repo.save(monitor);
		
	}
	
	public Monitor update(Monitor entity) {
		return repo.save(entity);
	}

	
	public void delete(Monitor entity) {
		repo.delete(entity);
	}

	public Optional<Monitor> findByID(long id) {
		return repo.findById(id);
	}

	public List<Monitor> findAll() {
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
