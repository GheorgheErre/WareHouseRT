package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Laptop;

@Repository
public interface LaptopRepository extends MongoRepository<Laptop, Long>{

}
