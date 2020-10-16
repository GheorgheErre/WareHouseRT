package WareHouseRT.WareHouseRT.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.User;
import WareHouseRT.WareHouseRT.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public User save(User user) {
		user.setId(sequenceService.getNextSequence(User.SEQUENCE_NAME));
		 return repo.save(user);
	} 
	
	public void delete(User entity) {
		repo.delete(entity);
	}

	public Optional<User> findByID(long id) {
		return repo.findById(id);
	}
	
	public User getUserByUsername(String username) {
		return repo.findByUsername(username);
	}
	
	public User getUserByUsernameAndPassword(String username, String password) {
		return repo.findByUsernameAndPassword(username, password);
	}
	
	
	
}
