package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Keyboard;

@Repository
public interface KeyboardRepository extends MongoRepository<Keyboard, Long>{

	public List<Keyboard> findByOrderByIdDesc();
}
