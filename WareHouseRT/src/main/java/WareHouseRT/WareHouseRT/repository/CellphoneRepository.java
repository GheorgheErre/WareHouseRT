package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Cellphone;

public interface CellphoneRepository extends MongoRepository<Cellphone, Long>{

}
