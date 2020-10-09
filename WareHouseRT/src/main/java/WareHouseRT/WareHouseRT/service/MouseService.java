package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.repository.MouseRepository;
@Service
public class MouseService {
	
	@Autowired
	private MouseRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Mouse mouse) {
		mouse.setId(sequenceService.getNextSequence(Mouse.SEQUENCE_NAME));
		repo.save(mouse);
		
	}

	public List<Mouse> findAll() {
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}

}
