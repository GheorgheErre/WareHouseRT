package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.repository.CableRepository;
import WareHouseRT.WareHouseRT.repository.GraphicTabletRepository;

@Service
public class GraphicTabletService {
	
	@Autowired
	private GraphicTabletRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(GraphicTablet graphicTablet) {
		graphicTablet.setId(sequenceService.getNextSequence(GraphicTablet.SEQUENCE_NAME));
		repo.save(graphicTablet);
		
	}

	public List<GraphicTablet> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}

}
