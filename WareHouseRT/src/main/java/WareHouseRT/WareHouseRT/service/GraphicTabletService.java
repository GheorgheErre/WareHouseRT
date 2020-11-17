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
	
	public GraphicTablet saveOrUpdate(GraphicTablet entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public GraphicTablet save(GraphicTablet graphicTablet) {
		graphicTablet.setId(sequenceService.getNextSequence(GraphicTablet.SEQUENCE_NAME));
		graphicTablet.setIdentifier(createIdentifier.createIdentifier("GFT"));
		return repo.save(graphicTablet);
		
	}
	
	public GraphicTablet update(GraphicTablet entity) {
		return repo.save(entity);
	}
	
	public void delete(GraphicTablet entity) {
		repo.delete(entity);
	}

	public Optional<GraphicTablet> findByID(long id) {
		return repo.findById(id);
	}

	public List<GraphicTablet> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}

}
