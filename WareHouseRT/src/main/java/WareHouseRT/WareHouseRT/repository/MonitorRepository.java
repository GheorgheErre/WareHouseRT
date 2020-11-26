package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Monitor;

@Repository
public interface MonitorRepository extends MongoRepository<Monitor, Long>{

	public List<Monitor> findByOrderByIdDesc();
}
