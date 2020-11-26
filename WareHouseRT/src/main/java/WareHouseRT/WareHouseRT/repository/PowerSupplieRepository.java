package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.PowerSupplie;

@Repository
public interface PowerSupplieRepository extends MongoRepository<PowerSupplie, Long>{

	public List<PowerSupplie> findByOrderByIdDesc();
}
