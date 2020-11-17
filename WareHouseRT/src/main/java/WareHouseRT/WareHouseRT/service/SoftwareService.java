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
	
	public Software saveOrUpdate(Software entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public Software save(Software software) {
		software.setId(sequenceService.getNextSequence(Software.SEQUENCE_NAME));
		software.setIdentifier(createIdentifier.createIdentifier("SFT"));
		return repo.save(software);
		
	}
	
	public Software update(Software entity) {
		return repo.save(entity);
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
