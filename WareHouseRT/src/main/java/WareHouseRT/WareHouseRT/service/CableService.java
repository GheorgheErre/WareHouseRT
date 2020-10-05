package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.repository.CableRepository;

public class CableService {
	
	@Autowired
	private CableRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(Cable cable) {
		cable.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(cable);
		
	}

	public List<Cable> findAll() {
		return repo.findAll();
	}


}
