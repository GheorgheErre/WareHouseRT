package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.repository.DesktopRepository;

@Service
public class DesktopService {
	@Autowired
	private DesktopRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Desktop saveOrUpdate(Desktop entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Desktop save(Desktop desktop, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		desktop.setId(sequenceService.getNextSequence(Desktop.SEQUENCE_NAME));
		desktop.setIdentifier(createIdentifier.createIdentifier("DSK"));
		Desktop d = repo.save(desktop);
		movementsService.save(d, note, tipoAzione);
		
		return d;
	}
	
	public Desktop update(Desktop entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Desktop d = repo.save(entity);
		movementsService.save(d, note, tipoAzione);
		
		return d;
	}
	
	public void changeLocation(Desktop d) {
		repo.save(d);
	}
	
	public void delete(Desktop entity) {
		repo.delete(entity);
	}

	public Optional<Desktop> findByID(long id) {
		return repo.findById(id);
	}

	public List<Desktop> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
