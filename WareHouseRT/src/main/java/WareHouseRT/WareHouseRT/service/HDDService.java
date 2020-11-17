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
	
	public HDD saveOrUpdate(HDD entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}
	
	public HDD save(HDD hdd) {
		hdd.setId(sequenceService.getNextSequence(HDD.SEQUENCE_NAME));
		hdd.setIdentifier(createIdentifier.createIdentifier("HDD"));
		return repo.save(hdd);
	}
	
	public HDD update(HDD entity) {
		return repo.save(entity);
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
