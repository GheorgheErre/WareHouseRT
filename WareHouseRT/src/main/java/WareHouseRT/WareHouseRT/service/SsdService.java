package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.SSD;
import WareHouseRT.WareHouseRT.repository.SsdRepository;

@Service
public class SsdService {
	@Autowired
	private SsdRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public SSD saveOrUpdate(SSD entity, String note) {
		if (repo.findById(entity.getId()).isPresent() && entity.getId() != 0) {
			return update(entity, note);
		} else
			return save(entity, note);
	}


	public SSD save(SSD ssd, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		ssd.setId(sequenceService.getNextSequence(SSD.SEQUENCE_NAME));
		ssd.setIdentifier(createIdentifier.createIdentifier("SSD"));
		SSD s = repo.save(ssd);
		movementsService.save(s, note, tipoAzione);
		
		return s;
	}
	
	public SSD update(SSD entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		SSD s = repo.save(entity);
		movementsService.save(s, note, tipoAzione);
		
		return s;
	}
	
	public void changeLocation(SSD s) {
		repo.save(s);
	}
	
	public void delete(SSD entity) {
		repo.delete(entity);
	}

	public Optional<SSD> findByID(long id) {
		return repo.findById(id);
	}

	public List<SSD> findAll() {
	
		return repo.findAll();
	}

	public long count() {
		
		return repo.count();
	}
}
