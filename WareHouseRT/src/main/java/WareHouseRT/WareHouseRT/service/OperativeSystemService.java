package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.OperativeSystem;
import WareHouseRT.WareHouseRT.repository.OperativeSystemRepository;

@Service
public class OperativeSystemService {

	@Autowired
	private OperativeSystemRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(OperativeSystem operativeSystem) {
		operativeSystem.setId(sequenceService.getNextSequence(OperativeSystem.SEQUENCE_NAME));
		repo.save(operativeSystem);

	}
	
	public void delete(OperativeSystem entity) {
		repo.delete(entity);
	}

	public Optional<OperativeSystem> findByID(long id) {
		return repo.findById(id);
	}

	public List<OperativeSystem> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
