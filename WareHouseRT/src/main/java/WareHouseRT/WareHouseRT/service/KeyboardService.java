package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.repository.KeyboardRepository;

@Service
public class KeyboardService {

	@Autowired
	private KeyboardRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Keyboard saveOrUpdate(Keyboard entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Keyboard save(Keyboard keyboard, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		keyboard.setId(sequenceService.getNextSequence(Keyboard.SEQUENCE_NAME));
		keyboard.setIdentifier(createIdentifier.createIdentifier("KEY"));
		Keyboard k = repo.save(keyboard);
		
		movementsService.save(k, note, tipoAzione);
		
		return k;

	}
	
	public Keyboard update(Keyboard entity, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		Keyboard k = repo.save(entity);
		
		movementsService.save(k, note, tipoAzione);
		
		return k;
	}
	
	public void changeLocation(Keyboard k) {
		repo.save(k);
	}

	public void delete(Keyboard entity) {
		repo.delete(entity);
	}

	public Optional<Keyboard> findByID(long id) {
		return repo.findById(id);
	}

	public List<Keyboard> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}
}
