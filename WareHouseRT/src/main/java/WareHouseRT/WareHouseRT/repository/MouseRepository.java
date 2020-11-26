package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Mouse;

@Repository
public interface MouseRepository extends MongoRepository<Mouse, Long>{

	public List<Mouse> findByOrderByIdDesc();
}
