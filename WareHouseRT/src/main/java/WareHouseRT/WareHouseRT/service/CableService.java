package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.repository.CableRepository;

@Service
public class CableService {

	@Autowired
	private CableRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;

	@Autowired
	private CreateIdentifierService createIdentifier;

	public Cable saveOrUpdate(Cable entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public Cable save(Cable cable) {
		cable.setId(sequenceService.getNextSequence(Cable.SEQUENCE_NAME));
		cable.setIdentifier(createIdentifier.createIdentifier("CBL"));
		return repo.save(cable);

	}

	public void delete(Cable entity) {
		repo.delete(entity);
	}

	public Cable update(Cable newCable) {
		return repo.save(newCable);
	}

	public Optional<Cable> findByID(long id) {
		return repo.findById(id);
	}

	public List<Cable> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
