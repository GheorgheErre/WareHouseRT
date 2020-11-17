package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.Laptop;
import WareHouseRT.WareHouseRT.repository.LaptopRepository;

@Service
public class LaptopService {

	@Autowired
	private LaptopRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public Laptop saveOrUpdate(Laptop entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}
	
	public Laptop save(Laptop laptop) {
		laptop.setId(sequenceService.getNextSequence(Laptop.SEQUENCE_NAME));
		laptop.setIdentifier(createIdentifier.createIdentifier("LPT"));
		return repo.save(laptop);
	}
	
	public Laptop update(Laptop entity) {
		return repo.save(entity);
	}
	
	public void delete(Laptop entity) {
		repo.delete(entity);
	}

	public Optional<Laptop> findByID(long id) {
		return repo.findById(id);
	}

	public List<Laptop> findAll() {
		
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}
}
