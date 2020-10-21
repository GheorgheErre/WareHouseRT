package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.repository.MouseRepository;

@Service
public class MouseService {

	@Autowired
	private MouseRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	@Autowired
	private CreateIdentifierService createIdentifier;

	public void saveOrUpdate(Mouse entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(Mouse mouse) {
		mouse.setId(sequenceService.getNextSequence(Mouse.SEQUENCE_NAME));
		mouse.setIdentifier(createIdentifier.createIdentifier("MOU"));
		repo.save(mouse);

	}

	public void update(Mouse entity) {
		repo.save(entity);
	}

	public void delete(Mouse entity) {
		repo.delete(entity);
	}

	public Optional<Mouse> findByID(long id) {
		return repo.findById(id);
	}

	public List<Mouse> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
