package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.repository.DockingStationRepository;

@Service
public class DockingStationService {

	@Autowired
	private DockingStationRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(DockingStation dockingStation) {
		dockingStation.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(dockingStation);

	}

	public List<DockingStation> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}


}
