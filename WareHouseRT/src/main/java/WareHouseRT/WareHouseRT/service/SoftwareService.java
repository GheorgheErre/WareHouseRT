package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Software;
import WareHouseRT.WareHouseRT.repository.SoftwareRepository;

@Service
public class SoftwareService {
	@Autowired
	private SoftwareRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Software saveOrUpdate(Software entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Software save(Software software, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		software.setId(sequenceService.getNextSequence(Software.SEQUENCE_NAME));
		software.setIdentifier(createIdentifier.createIdentifier("SFT"));
		Software s = repo.save(software);
		movementsService.save(s, note, tipoAzione);
		
		return s;
		
	}
	
	public Software update(Software entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Software s = repo.save(entity);
		movementsService.save(s, note, tipoAzione);
		
		return s;
	}
	
	public void changeLocation(Software s) {
		repo.save(s);
	}
	
	public void delete(Software entity) {
		repo.delete(entity);
	}

	public Optional<Software> findByID(long id) {
		return repo.findById(id);
	}

	public List<Software> findAll() {
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
	
		return repo.count();
	}

}
