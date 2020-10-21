package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.repository.KeyboardRepository;

@Service
public class KeyboardService {

	@Autowired
	private KeyboardRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public void saveOrUpdate(Keyboard entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(Keyboard keyboard) {
		keyboard.setId(sequenceService.getNextSequence(Keyboard.SEQUENCE_NAME));
		keyboard.setIdentifier(createIdentifier.createIdentifier("KEY"));
		repo.save(keyboard);

	}
	
	public void update(Keyboard entity) {
		repo.save(entity);
	}

	public void delete(Keyboard entity) {
		repo.delete(entity);
	}

	public Optional<Keyboard> findByID(long id) {
		return repo.findById(id);
	}

	public List<Keyboard> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}
}
