package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Token;

public interface TokenRepository extends MongoRepository<Token, Long>{

}
