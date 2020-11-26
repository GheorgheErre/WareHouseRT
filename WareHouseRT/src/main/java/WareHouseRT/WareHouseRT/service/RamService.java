package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.RAM;
import WareHouseRT.WareHouseRT.repository.RamRepository;


@Service
public class RamService {
	@Autowired
	private RamRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public RAM saveOrUpdate(RAM entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public RAM save(RAM ram, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		ram.setId(sequenceService.getNextSequence(RAM.SEQUENCE_NAME));
		ram.setIdentifier(createIdentifier.createIdentifier("RAM"));
		RAM r = repo.save(ram);
		movementsService.save(r, note, tipoAzione);
		
		return r;
	}
	
	public RAM update(RAM entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		RAM r = repo.save(entity);
		movementsService.save(r, note, tipoAzione);
		
		return r;
	}
	
	public void changeLocation(RAM r) {
		repo.save(r);
	}
	
	public void delete(RAM entity) {
		repo.delete(entity);
	}

	public Optional<RAM> findByID(long id) {
		return repo.findById(id);
	}

	public List<RAM> findAll() {
		
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
		
		return repo.count();
	}

}
