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
	
	public void saveOrUpdate(DockingStation entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}


	public void save(DockingStation dockingStation) {
		dockingStation.setId(sequenceService.getNextSequence(DockingStation.SEQUENCE_NAME));
		createIdentifier.createIdentifier("DKS");
		repo.save(dockingStation);

	}
	
	public void update(DockingStation dockingStation) {
		repo.save(dockingStation);

	}
	
	public void delete(DockingStation entity) {
		repo.delete(entity);
	}

	public Optional<DockingStation> findByID(long id) {
		return repo.findById(id);
	}

	public List<DockingStation> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}


}
