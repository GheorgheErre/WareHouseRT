package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Software;

@Repository
public interface SoftwareRepository extends MongoRepository<Software, Long> {

}
