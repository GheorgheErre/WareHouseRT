package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Monitor;

public interface MonitorRepository extends MongoRepository<Monitor, Long>{

}
