package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.GPU;
import WareHouseRT.WareHouseRT.repository.GpuRepository;

@Service
public class GpuService {
	@Autowired
	private GpuRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public GPU saveOrUpdate(GPU entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public GPU save(GPU gpu, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		gpu.setId(sequenceService.getNextSequence(GPU.SEQUENCE_NAME));
		createIdentifier.createIdentifier("GPU");
		GPU g = repo.save(gpu);
		movementsService.save(g, note, tipoAzione);
		
		return g;
	}
	
	public GPU update(GPU gpu, String note) {
		String tipoAzione = "Modifica Prodotto";
		GPU g = repo.save(gpu);
		movementsService.save(g, note, tipoAzione);
		
		return g;
	}
	
	public void changeLocation(GPU g) {
		repo.save(g);
	}
	
	public void delete(GPU entity) {
		repo.delete(entity);
	}

	public Optional<GPU> findByID(long id) {
		return repo.findById(id);
	}

	public List<GPU> findAll() {
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
	
		return repo.count();
	}

}
