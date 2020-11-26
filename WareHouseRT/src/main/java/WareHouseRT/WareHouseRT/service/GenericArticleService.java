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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public GenericArticle saveOrUpdate(GenericArticle entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}

	public GenericArticle save(GenericArticle genericArticle, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		genericArticle.setId(sequenceService.getNextSequence(GenericArticle.SEQUENCE_NAME));
		genericArticle.setIdentifier(createIdentifier.createIdentifier("ART"));
		GenericArticle g = repo.save(genericArticle);
		
		movementsService.save(g, note, tipoAzione);
		
		return g;

		
	}
	
	public GenericArticle update(GenericArticle entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		GenericArticle g = repo.save(entity);
		
		movementsService.save(g, note, tipoAzione);
		
		return g;

	}
	
	public void changeLocation(GenericArticle g) {
		repo.save(g);
	}
	
	public void delete(GenericArticle entity) {
		repo.delete(entity);
	}

	public Optional<GenericArticle> findByID(long id) {
		return repo.findById(id);
	}

	public List<GenericArticle> findAll() {
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
	
		return repo.count();
	}


}
