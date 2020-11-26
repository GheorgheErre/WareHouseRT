package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Token;
import WareHouseRT.WareHouseRT.repository.TokenRepository;

@Service
public class TokenService {

	@Autowired
	private TokenRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	public Token saveOrUpdate(Token entity, String note) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity, note);
		} else
			return save(entity, note);
	}
	
	public Token save(Token token, String note) {
		String tipoAzione = "Aggiunta Prodotto";
		token.setId(sequenceService.getNextSequence(Token.SEQUENCE_NAME));
		token.setIdentifier(createIdentifier.createIdentifier("TKN"));
		Token t = repo.save(token);
		movementsService.save(t, note, tipoAzione);
		
		return t;
	}
	
	public Token update(Token entity, String note) {
		String tipoAzione = "Modifica Prodotto";
		Token t = repo.save(entity);
		movementsService.save(t, note, tipoAzione);
		
		return t;
	}
	
	public void changeLocation(Token t) {
		repo.save(t);
	}
	
	public void delete(Token entity) {
		repo.delete(entity);
	}

	public Optional<Token> findByID(long id) {
		return repo.findById(id);
	}

	public List<Token> findAll() {
		
		return repo.findByOrderByIdDesc();
	}
	
	public long count() {
		
		return repo.count();
	}
}
