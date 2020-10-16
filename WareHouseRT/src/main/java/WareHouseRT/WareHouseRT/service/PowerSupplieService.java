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
	
	public void save(PowerSupplie powerSupplie) {
		powerSupplie.setId(sequenceService.getNextSequence(PowerSupplie.SEQUENCE_NAME));
		repo.save(powerSupplie);
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
