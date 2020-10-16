package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.GenericArticle;
import WareHouseRT.WareHouseRT.repository.GenericArticleRepository;

@Service
public class GenericArticleService {
	
	@Autowired
	private GenericArticleRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;

	public void save(GenericArticle genericArticle) {
		genericArticle.setId(sequenceService.getNextSequence(GenericArticle.SEQUENCE_NAME));
		repo.save(genericArticle);
		
	}
	
	public void delete(GenericArticle entity) {
		repo.delete(entity);
	}

	public Optional<GenericArticle> findByID(long id) {
		return repo.findById(id);
	}

	public List<GenericArticle> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}


}
