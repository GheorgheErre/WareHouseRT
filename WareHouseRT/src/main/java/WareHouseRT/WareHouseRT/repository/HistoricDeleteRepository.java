package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;

@Repository
public interface HistoricDeleteRepository extends MongoRepository<HistoricDelete, Long>{

}
