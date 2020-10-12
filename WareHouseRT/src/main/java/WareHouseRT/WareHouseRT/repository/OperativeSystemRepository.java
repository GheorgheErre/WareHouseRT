package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.OperativeSystem;

@Repository
public interface OperativeSystemRepository extends MongoRepository<OperativeSystem, Long>{

}
