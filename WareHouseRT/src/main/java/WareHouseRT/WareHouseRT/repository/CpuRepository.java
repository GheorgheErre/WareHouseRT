package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.CPU;

@Repository
public interface CpuRepository  extends MongoRepository<CPU, Integer>{

}
