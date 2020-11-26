package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.repository.DockingStationRepository;

@Service
public class DockingStationService {

	@Autowired
	private DockingStationRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public DockingStation saveOrUpdate(DockingStation entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}


	public DockingStation save(DockingStation dockingStation, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		dockingStation.setId(sequenceService.getNextSequence(DockingStation.SEQUENCE_NAME));
		dockingStation.setIdentifier(createIdentifier.createIdentifier("DKS"));

		DockingStation d = repo.save(dockingStation);
		movementsService.save(d, note, tipoAzione);
		
		return d;

	}
	
	public DockingStation update(DockingStation dockingStation, String note) {
		String tipoAzione = "Modifica Prodotto";
		DockingStation d = repo.save(dockingStation);
		movementsService.save(d, note, tipoAzione);
		
		return d;

	}
	
	public void changeLocation(DockingStation d) {
		repo.save(d);
	}
	
	public void delete(DockingStation entity) {
		repo.delete(entity);
	}

	public Optional<DockingStation> findByID(long id) {
		return repo.findById(id);
	}

	public List<DockingStation> findAll() {
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
	
		return repo.count();
	}


}
