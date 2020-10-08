package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.SSD;
import WareHouseRT.WareHouseRT.repository.SsdRepository;

@Service
public class SsdService {
	@Autowired
	private SsdRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(SSD ssd) {
		ssd.setId(sequenceService.getNextSequence(SSD.SEQUENCE_NAME));
		repo.save(ssd);
	}

	public List<SSD> findAll() {
	
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
