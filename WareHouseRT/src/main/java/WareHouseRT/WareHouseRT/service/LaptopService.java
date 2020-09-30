package WareHouseRT.WareHouseRT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.Laptop;

@Service
public class LaptopService {

	@Autowired
	private LaptopService repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Laptop laptop) {
		laptop.setId(sequenceService.getNextSequence(Laptop.SEQUENCE_NAME));
		repo.save(laptop);
	}
	
}
