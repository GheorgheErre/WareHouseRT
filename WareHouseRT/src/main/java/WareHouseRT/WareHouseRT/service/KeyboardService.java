package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.repository.KeyboardRepository;


public class KeyboardService {
	
	@Autowired
	private KeyboardRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Keyboard keyboard) {
		keyboard.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(keyboard);
		
	}

	public List<Keyboard> findAll() {
		return repo.findAll();
	}

}
