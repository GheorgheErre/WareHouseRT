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
	
	public void save(Token token) {
		token.setId(sequenceService.getNextSequence(Token.SEQUENCE_NAME));
		repo.save(token);
	}
	
	public void delete(Token entity) {
		repo.delete(entity);
	}

	public Optional<Token> findByID(long id) {
		return repo.findById(id);
	}

	public List<Token> findAll() {
		
		return repo.findAll();
	}
	
	public long count() {
		
		return repo.count();
	}
}
