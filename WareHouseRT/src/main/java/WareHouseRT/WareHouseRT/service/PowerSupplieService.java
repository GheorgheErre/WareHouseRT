package WareHouseRT.WareHouseRT.service;

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
	
}
