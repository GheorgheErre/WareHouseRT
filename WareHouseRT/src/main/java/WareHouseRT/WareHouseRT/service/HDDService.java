package WareHouseRT.WareHouseRT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.HDD;
import WareHouseRT.WareHouseRT.repository.HddRepository;

@Service
public class HDDService{

	@Autowired
	private HddRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(HDD hdd) {
		hdd.setId(sequenceService.getNextSequence(HDD.SEQUENCE_NAME));
		repo.save(hdd);
	}
	
}
