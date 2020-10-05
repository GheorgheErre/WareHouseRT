package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.OperativeSystem;
import WareHouseRT.WareHouseRT.repository.OperativeSystemRepository;

public class OperativeSystemService {

	
	@Autowired
	private OperativeSystemRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(OperativeSystem operativeSystem) {
		operativeSystem.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(operativeSystem);
		
	}

	public List<OperativeSystem> findAll() {
		return repo.findAll();
	}
}
