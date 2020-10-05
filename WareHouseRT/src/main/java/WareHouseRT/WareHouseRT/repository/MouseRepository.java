package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Mouse;

public interface MouseRepository extends MongoRepository<Mouse, Long>{

}
