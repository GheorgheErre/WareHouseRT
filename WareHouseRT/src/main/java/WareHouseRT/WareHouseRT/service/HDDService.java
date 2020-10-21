package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public void saveOrUpdate(HDD entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}
	
	public void save(HDD hdd) {
		hdd.setId(sequenceService.getNextSequence(HDD.SEQUENCE_NAME));
		hdd.setIdentifier(createIdentifier.createIdentifier("HDD"));
		repo.save(hdd);
	}
	
	public void update(HDD entity) {
		repo.save(entity);
	}
	
	public void delete(HDD entity) {
		repo.delete(entity);
	}

	public Optional<HDD> findByID(long id) {
		return repo.findById(id);
	}

	public List<HDD> findAll() {
		
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}
}
