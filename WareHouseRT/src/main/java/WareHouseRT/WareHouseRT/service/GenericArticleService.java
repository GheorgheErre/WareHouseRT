package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.GenericArticle;
import WareHouseRT.WareHouseRT.repository.GenericArticleRepository;

@Service
public class GenericArticleService {
	
	@Autowired
	private GenericArticleRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(GenericArticle genericArticle) {
		genericArticle.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(genericArticle);
		
	}

	public List<GenericArticle> findAll() {
		return repo.findAll();
	}

}
