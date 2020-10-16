package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.RAM;

public interface RamRepository extends MongoRepository<RAM, Long>{

}
