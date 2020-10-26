package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import WareHouseRT.WareHouseRT.beans.WorkStation;

@Repository
public interface WorkStationRepository extends MongoRepository<WorkStation, Long>{

}
