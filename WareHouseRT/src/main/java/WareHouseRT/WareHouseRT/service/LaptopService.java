package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Laptop;
import WareHouseRT.WareHouseRT.repository.LaptopRepository;

@Service
public class LaptopService {

	@Autowired
	private LaptopRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Laptop saveOrUpdate(Laptop entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public Laptop save(Laptop laptop, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		laptop.setId(sequenceService.getNextSequence(Laptop.SEQUENCE_NAME));
		laptop.setIdentifier(createIdentifier.createIdentifier("LPT"));
		Laptop l = repo.save(laptop);
		movementsService.save(l, note, tipoAzione);
		
		return l;
	}
	
	public Laptop update(Laptop entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Laptop l = repo.save(entity);
		movementsService.save(l, note, tipoAzione);
		
		return l;
	}
	
	public void changeLocation(Laptop l) {
		repo.save(l);
	}
	
	public void delete(Laptop entity) {
		repo.delete(entity);
	}

	public Optional<Laptop> findByID(long id) {
		return repo.findById(id);
	}

	public List<Laptop> findAll() {
		
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}
}
