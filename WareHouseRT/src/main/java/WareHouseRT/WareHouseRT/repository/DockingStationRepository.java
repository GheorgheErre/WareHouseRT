package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.DockingStation;

@Repository
public interface DockingStationRepository extends MongoRepository<DockingStation, Long>{

}
