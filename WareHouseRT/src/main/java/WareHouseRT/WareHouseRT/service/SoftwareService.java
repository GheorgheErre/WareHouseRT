package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Software;
import WareHouseRT.WareHouseRT.repository.SoftwareRepository;

@Service
public class SoftwareService {
	@Autowired
	private SoftwareRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(Software software) {
		software.setId(sequenceService.getNextSequence(Software.SEQUENCE_NAME));
		repo.save(software);
		
	}

	public List<Software> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}

}
