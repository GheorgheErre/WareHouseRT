package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import WareHouseRT.WareHouseRT.beans.User;

public interface UserRepository extends MongoRepository<User, Long> {

	public User findByUsername(String username);
	public User findByUsernameAndPassword(String username, String password);
}
