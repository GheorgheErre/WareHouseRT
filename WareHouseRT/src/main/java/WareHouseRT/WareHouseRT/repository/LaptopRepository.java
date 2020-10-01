package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Laptop;

public interface LaptopRepository extends MongoRepository<Laptop, Long>{

}
