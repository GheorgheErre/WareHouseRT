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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public OperativeSystem saveOrUpdate(OperativeSystem entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public OperativeSystem save(OperativeSystem operativeSystem) {
		operativeSystem.setId(sequenceService.getNextSequence(OperativeSystem.SEQUENCE_NAME));
		operativeSystem.setIdentifier(createIdentifier.createIdentifier("OPS"));
		return repo.save(operativeSystem);

	}
	
	public OperativeSystem update(OperativeSystem entity) {
		return repo.save(entity);
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
