package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.repository.HistoricDeleteRepository;

@Service
public class HistoricDeleteService {

	@Autowired
	private HistoricDeleteRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
		
		
	public void saveOrUpdate(HistoricDelete entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(HistoricDelete entity) {
		entity.setId(sequenceService.getNextSequence(HistoricMovements.SEQUENCE_NAME));
		repo.save(entity);
	}
	
	public void update(HistoricDelete entity) {
		repo.save(entity);
	}
	
	public void delete(HistoricDelete entity) {
		repo.delete(entity);
	}
	
	public Optional<HistoricDelete> findByID(long id) {
		return repo.findById(id);
	}

	public List<HistoricDelete> findAll() {
		return repo.findAll();

	}


}
