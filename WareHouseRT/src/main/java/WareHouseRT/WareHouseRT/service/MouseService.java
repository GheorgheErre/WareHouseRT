package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.repository.MouseRepository;

public class MouseService {
	
	@Autowired
	private MouseRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Mouse mouse) {
		mouse.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(mouse);
		
	}

	public List<Mouse> findAll() {
		return repo.findAll();
	}

}
