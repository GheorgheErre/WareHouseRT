package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.repository.DesktopRepository;

@Service
public class DesktopService {
	@Autowired
	private DesktopRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public void saveOrUpdate(Desktop entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);
	}

	public void save(Desktop desktop) {
		desktop.setId(sequenceService.getNextSequence(Desktop.SEQUENCE_NAME));
		desktop.setIdentifier(createIdentifier.createIdentifier("DSK"));
		repo.save(desktop);
	}
	
	public void update(Desktop entity) {
		repo.save(entity);
	}
	
	public void delete(Desktop entity) {
		repo.delete(entity);
	}

	public Optional<Desktop> findByID(long id) {
		return repo.findById(id);
	}

	public List<Desktop> findAll() {
		return repo.findAll();
	}

	public long count() {

		return repo.count();
	}

}
