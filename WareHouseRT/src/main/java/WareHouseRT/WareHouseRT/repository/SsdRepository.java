package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.SSD;

@Repository
public interface SsdRepository extends MongoRepository<SSD, Long>{

}
