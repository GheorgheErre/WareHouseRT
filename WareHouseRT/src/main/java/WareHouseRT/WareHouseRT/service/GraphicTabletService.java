package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.repository.GraphicTabletRepository;

@Service
public class GraphicTabletService {
	
	@Autowired
	private GraphicTabletRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public GraphicTablet saveOrUpdate(GraphicTablet entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public GraphicTablet save(GraphicTablet graphicTablet, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		graphicTablet.setId(sequenceService.getNextSequence(GraphicTablet.SEQUENCE_NAME));
		graphicTablet.setIdentifier(createIdentifier.createIdentifier("GFT"));
		GraphicTablet g = repo.save(graphicTablet);
		movementsService.save(g, note, tipoAzione);
		
		return g;
		
	}
	
	public GraphicTablet update(GraphicTablet entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		GraphicTablet g = repo.save(entity);
		movementsService.save(g, note, tipoAzione);
		
		return g;
	}
	
	public void changeLocation(GraphicTablet g) {
		repo.save(g);
	}
	
	public void delete(GraphicTablet entity) {
		repo.delete(entity);
	}

	public Optional<GraphicTablet> findByID(long id) {
		return repo.findById(id);
	}

	public List<GraphicTablet> findAll() {
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
	
		return repo.count();
	}

}
