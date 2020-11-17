package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.PowerSupplie;
import WareHouseRT.WareHouseRT.repository.PowerSupplieRepository;

@Service
public class PowerSupplieService {
	@Autowired
	private PowerSupplieRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public PowerSupplie saveOrUpdate(PowerSupplie entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}
	
	public PowerSupplie save(PowerSupplie powerSupplie) {
		powerSupplie.setId(sequenceService.getNextSequence(PowerSupplie.SEQUENCE_NAME));
		powerSupplie.setIdentifier(createIdentifier.createIdentifier("POW"));
		return repo.save(powerSupplie);
	}
	
	public PowerSupplie update(PowerSupplie entity) {
		return repo.save(entity);
	}
	
	public void delete(PowerSupplie entity) {
		repo.delete(entity);
	}

	public Optional<PowerSupplie> findByID(long id) {
		return repo.findById(id);
	}

	public List<PowerSupplie> findAll() {
		
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}

}
