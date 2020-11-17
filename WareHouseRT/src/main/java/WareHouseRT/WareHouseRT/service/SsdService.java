package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public SSD saveOrUpdate(SSD entity) {
		if (repo.findById(entity.getId()).isPresent() && entity.getId() != 0) {
			return update(entity);
		} else
			return save(entity);
	}


	public SSD save(SSD ssd) {
		ssd.setId(sequenceService.getNextSequence(SSD.SEQUENCE_NAME));
		ssd.setIdentifier(createIdentifier.createIdentifier("SSD"));
		return repo.save(ssd);
	}
	
	public SSD update(SSD entity) {
		return repo.save(entity);
	}
	
	public void delete(SSD entity) {
		repo.delete(entity);
	}

	public Optional<SSD> findByID(long id) {
		return repo.findById(id);
	}

	public List<SSD> findAll() {
	
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
