package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.GPU;

@Repository
public interface GpuRepository extends MongoRepository<GPU, Long>{

}
