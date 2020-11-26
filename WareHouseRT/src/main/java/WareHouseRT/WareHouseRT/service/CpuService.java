package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.repository.CpuRepository;

@Service
public class CpuService {

	@Autowired
	private CpuRepository repo;

	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public CPU saveOrUpdate(CPU entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public CPU save(CPU cpu, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		cpu.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		cpu.setIdentifier(createIdentifier.createIdentifier("CPU"));
		
		CPU c = repo.save(cpu);
		movementsService.save(c, note, tipoAzione);
		
		return c;
		
	}
	
	public CPU update(CPU newCpu, String note) {
		String tipoAzione = "Modifica Prodotto";
		
		CPU c = repo.save(newCpu);
		movementsService.save(c, note, tipoAzione);
		
		return c;
	}
	
	public void changeLocation(CPU c) {
		repo.save(c);
	}

	public void delete(CPU entity) {
		repo.delete(entity);
	}

	public Optional<CPU> findByID(long id) {
		return repo.findById(id);
	}

	public List<CPU> findAll() {
		return repo.findByOrderByIdDesc();

	}

	public long count() {

		return repo.count();
	}

}
