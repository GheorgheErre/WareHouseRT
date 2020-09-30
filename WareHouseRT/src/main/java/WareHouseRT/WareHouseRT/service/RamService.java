package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.RAM;
import WareHouseRT.WareHouseRT.repository.RamRepository;


@Service
public class RamService {
	@Autowired
	private RamRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(RAM ram) {
		ram.setId(sequenceService.getNextSequence(RAM.SEQUENCE_NAME));
		repo.save(ram);
	}

	public List<RAM> findAll() {
		
		return repo.findAll();
	}
	
}
