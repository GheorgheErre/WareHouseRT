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

	public void save(Cable cable) {
		cable.setId(sequenceService.getNextSequence(Cable.SEQUENCE_NAME));
		repo.save(cable);
		
	}

	public void delete(Cable entity) {
		repo.delete(entity);
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
