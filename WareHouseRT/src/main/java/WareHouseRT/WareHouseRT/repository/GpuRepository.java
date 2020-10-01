package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.GPU;

public interface GpuRepository extends MongoRepository<GPU, Long>{

}
