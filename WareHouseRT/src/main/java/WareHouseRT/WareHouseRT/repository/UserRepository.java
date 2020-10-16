package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.User;
/** 
 * 
 * Interface that contains methods used to get data from user collection
 * 
 * */
@Repository
public interface UserRepository extends MongoRepository<User, Long> {
	/**
	 * Get User document by username
	 * 
	 * @param username used to make the query
	 * 
	 * @return User object found with the query
	 * 
	 * */
	public User findByUsername(String username);
	public User findByUsernameAndPassword(String username, String password);
}
