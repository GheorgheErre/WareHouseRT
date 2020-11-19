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
	
	@Autowired
	private HistoricMovementsService movementsService;

	public Cellphone saveOrUpdate(Cellphone entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public Cellphone save(Cellphone cell, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		
		cell.setId(sequenceService.getNextSequence(Cellphone.SEQUENCE_NAME));
		cell.setIdentifier(createIdentifier.createIdentifier("CEL"));
		Cellphone c = repo.save(cell);
		
		movementsService.save(c, note, tipoAzione);
		
		return c;
	}

	public void delete(Cellphone entity) {
		repo.delete(entity);
	}

	public Cellphone update(Cellphone newCell, String note) {
		String tipoAzione = "Modifica Prodotto";
		
		Cellphone c = repo.save(newCell);
		movementsService.save(c, note, tipoAzione);
		
		return c;
	}
	
	public void changeLocation(Cellphone c) {
		repo.save(c);
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
