package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.DockingStation;

public interface DockingStationRepository extends MongoRepository<DockingStation, Long>{

}
