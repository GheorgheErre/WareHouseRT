package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Software;

public interface SoftwareRepository extends MongoRepository<Software, Long> {

}
