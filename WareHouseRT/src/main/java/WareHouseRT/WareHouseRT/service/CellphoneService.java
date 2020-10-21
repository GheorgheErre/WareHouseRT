package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.repository.CellphoneRepository;

@Service
public class CellphoneService {

	@Autowired
	private CellphoneRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public void saveOrUpdate(Cellphone entity) {
		if(repo.findById(entity.getId()).isPresent()) {
			update(entity);
		}
		else
			save(entity);
	}

	
	public void save(Cellphone cell) {
		cell.setId(sequenceService.getNextSequence(Cellphone.SEQUENCE_NAME));
		cell.setIdentifier(createIdentifier.createIdentifier("CEL"));
		repo.save(cell);
		
	}


	public void delete(Cellphone entity) {
		repo.delete(entity);
	}
	
	public void update(Cellphone newCell) {
		repo.save(newCell);
	}

	public Optional<Cellphone> findByID(long id) {
		return repo.findById(id);
	}

	public List<Cellphone> findAll() {
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}
	
}
