package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.repository.CableRepository;

@Service
public class CableService {

	@Autowired
	private CableRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	@Autowired
	private CreateIdentifierService createIdentifier;

	@Autowired
	private HistoricMovementsService movementsService;

	public Cable saveOrUpdate(Cable entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Cable save(Cable cable, String note) {
		String tipoAzione = "Aggiunta Prodotto";

		cable.setId(sequenceService.getNextSequence(Cable.SEQUENCE_NAME));
		cable.setIdentifier(createIdentifier.createIdentifier("CBL"));
		Cable c = repo.save(cable);
		movementsService.save(c, note, tipoAzione);

		return c;

	}

	public Cable update(Cable newCable, String note) {
		String tipoAzione = "Modifica Prodotto";

		Cable c = repo.save(newCable);
		movementsService.save(c, note, tipoAzione);

		return c;
	}

	public void changeLocation(Cable c) {
		repo.save(c);
	}

	public void delete(Cable entity) {
		repo.delete(entity);
	}

	public Optional<Cable> findByID(long id) {
		return repo.findById(id);
	}

	public List<Cable> findAll() {
		return repo.findByOrderByIdDesc();

	}

	public long count() {

		return repo.count();
	}

}
