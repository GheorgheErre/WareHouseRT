package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.HDD;
import WareHouseRT.WareHouseRT.repository.HddRepository;

@Service
public class HDDService{

	@Autowired
	private HddRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public HDD saveOrUpdate(HDD entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public HDD save(HDD hdd, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		hdd.setId(sequenceService.getNextSequence(HDD.SEQUENCE_NAME));
		hdd.setIdentifier(createIdentifier.createIdentifier("HDD"));
		HDD h = repo.save(hdd);
		
		movementsService.save(h, note, tipoAzione);

		return h;
	}
	
	public HDD update(HDD entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		HDD h = repo.save(entity);
		
		movementsService.save(h, note, tipoAzione);

		return h;
	}
	
	public void changeLocation(HDD h) {
		repo.save(h);
	}
	
	public void delete(HDD entity) {
		repo.delete(entity);
	}

	public Optional<HDD> findByID(long id) {
		return repo.findById(id);
	}

	public List<HDD> findAll() {
		
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
		
		return repo.count();
	}
}
