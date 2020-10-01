package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import WareHouseRT.WareHouseRT.beans.User;

public interface UserRepository extends MongoRepository<User, Long> {

	User findByUsername(String username);
}
