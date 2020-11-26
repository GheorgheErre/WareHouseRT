package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.HDD;

@Repository
public interface HddRepository extends MongoRepository<HDD, Long>{

	public List<HDD> findByOrderByIdDesc();
}
