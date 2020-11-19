package WareHouseRT.WareHouseRT.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.WorkStation;
import WareHouseRT.WareHouseRT.repository.WorkStationRepository;

@Service
public class WorkStationService {

	@Autowired
	private WorkStationRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;


	public void saveOrUpdate(WorkStation entity) {


		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);

		System.out.println("hey");

	}

	public void save(WorkStation entity) {
		entity.setId(sequenceService.getNextSequence(WorkStation.SEQUENCE_NAME));
		// entity.setIdentifier(createIdentifier.createIdentifier("CPU"));
		repo.save(entity);
	}

	public void update(WorkStation entity) {
		repo.save(entity);
	}

	public void delete(WorkStation entity) {
		repo.delete(entity);
	}

	public WorkStation findWorkstation(String office, int numero) {
		return repo.findByOfficeAndNumero(office, numero);
	}
	

	public List<WorkStation> findAll() {
		return repo.findAll();

	}

	public long count() {
		return repo.count();
	}

}
