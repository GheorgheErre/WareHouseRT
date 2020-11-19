package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.repository.MonitorRepository;

@Service
public class MonitorService {
	
	@Autowired
	private MonitorRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Monitor saveOrUpdate(Monitor entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public Monitor save(Monitor monitor, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		monitor.setId(sequenceService.getNextSequence(Monitor.SEQUENCE_NAME));
		monitor.setIdentifier(createIdentifier.createIdentifier("MON"));
		Monitor m = repo.save(monitor);
		movementsService.save(m, note, tipoAzione);
		
		return m;
		
	}
	
	public Monitor update(Monitor entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Monitor m = repo.save(entity);
		movementsService.save(m, note, tipoAzione);
		
		return m;
	}
	
	public void changeLocation(Monitor m) {
		repo.save(m);
	}

	
	public void delete(Monitor entity) {
		repo.delete(entity);
	}

	public Optional<Monitor> findByID(long id) {
		return repo.findById(id);
	}

	public List<Monitor> findAll() {
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
