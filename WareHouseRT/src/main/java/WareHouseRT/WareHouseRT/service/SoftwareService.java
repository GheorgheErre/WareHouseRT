package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public void saveOrUpdate(Software entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(Software software) {
		software.setId(sequenceService.getNextSequence(Software.SEQUENCE_NAME));
		software.setIdentifier(createIdentifier.createIdentifier("SFT"));
		repo.save(software);
		
	}
	
	public void update(Software entity) {
		repo.save(entity);
	}
	
	public void delete(Software entity) {
		repo.delete(entity);
	}

	public Optional<Software> findByID(long id) {
		return repo.findById(id);
	}

	public List<Software> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}

}
