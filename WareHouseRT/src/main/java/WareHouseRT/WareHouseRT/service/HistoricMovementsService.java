package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.repository.HistoricMovementsRepository;

@Service
public class HistoricMovementsService {

	@Autowired
	private HistoricMovementsRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
		
		
	public void saveOrUpdate(HistoricMovements entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(HistoricMovements entity) {
		entity.setId(sequenceService.getNextSequence(HistoricMovements.SEQUENCE_NAME));
		repo.save(entity);
	}
	
	public void update(HistoricMovements entity) {
		repo.save(entity);
	}
	
	public void delete(HistoricMovements entity) {
		repo.delete(entity);
	}
	
	public Optional<HistoricMovements> findByID(long id) {
		return repo.findById(id);
	}

	public List<HistoricMovements> findAll() {
		return repo.findAll();

	}


}
