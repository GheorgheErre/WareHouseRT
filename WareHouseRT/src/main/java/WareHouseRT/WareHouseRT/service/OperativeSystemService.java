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
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public OperativeSystem saveOrUpdate(OperativeSystem entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public OperativeSystem save(OperativeSystem operativeSystem, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		operativeSystem.setId(sequenceService.getNextSequence(OperativeSystem.SEQUENCE_NAME));
		operativeSystem.setIdentifier(createIdentifier.createIdentifier("OPS"));
		OperativeSystem o = repo.save(operativeSystem);
		movementsService.save(o, note, tipoAzione);
		
		return o;

	}
	
	public OperativeSystem update(OperativeSystem entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		OperativeSystem o = repo.save(entity);
		movementsService.save(o, note, tipoAzione);
		
		return o;
	}
	
	public void changeLocation(OperativeSystem o) {
		repo.save(o);
	}
	
	public void delete(OperativeSystem entity) {
		repo.delete(entity);
	}

	public Optional<OperativeSystem> findByID(long id) {
		return repo.findById(id);
	}

	public List<OperativeSystem> findAll() {
		return repo.findByOrderByIdDesc();
	}

	public long count() {

		return repo.count();
	}

}
