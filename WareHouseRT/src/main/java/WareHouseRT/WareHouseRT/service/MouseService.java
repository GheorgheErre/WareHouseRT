package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.repository.MouseRepository;

@Service
public class MouseService {

	@Autowired
	private MouseRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;

	public Mouse saveOrUpdate(Mouse entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Mouse save(Mouse mouse, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		mouse.setId(sequenceService.getNextSequence(Mouse.SEQUENCE_NAME));
		mouse.setIdentifier(createIdentifier.createIdentifier("MOU"));
		Mouse m = repo.save(mouse);
		movementsService.save(m, note, tipoAzione);
		
		return m;

	}

	public Mouse update(Mouse entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Mouse m = repo.save(entity);
		movementsService.save(m, note, tipoAzione);
		
		return m;
	}
	
	public void changeLocation(Mouse m) {
		repo.save(m);
	}

	public void delete(Mouse entity) {
		repo.delete(entity);
	}

	public Optional<Mouse> findByID(long id) {
		return repo.findById(id);
	}

	public List<Mouse> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
