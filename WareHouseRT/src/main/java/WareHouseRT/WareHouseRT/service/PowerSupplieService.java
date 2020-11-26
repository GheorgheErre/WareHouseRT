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
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public PowerSupplie saveOrUpdate(PowerSupplie entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public PowerSupplie save(PowerSupplie powerSupplie, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		powerSupplie.setId(sequenceService.getNextSequence(PowerSupplie.SEQUENCE_NAME));
		powerSupplie.setIdentifier(createIdentifier.createIdentifier("POW"));
		PowerSupplie p = repo.save(powerSupplie);
		movementsService.save(p, note, tipoAzione);
		
		return p;
	}
	
	public PowerSupplie update(PowerSupplie entity, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		PowerSupplie p = repo.save(entity);
		movementsService.save(p, note, tipoAzione);
		
		return p;
	}
	
	public void changeLocation(PowerSupplie p) {
		repo.save(p);
	}
	
	public void delete(PowerSupplie entity) {
		repo.delete(entity);
	}

	public Optional<PowerSupplie> findByID(long id) {
		return repo.findById(id);
	}

	public List<PowerSupplie> findAll() {
		
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
		
		return repo.count();
	}

}
