package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Software;

@Repository
public interface SoftwareRepository extends MongoRepository<Software, Long> {

	public List<Software> findByOrderByIdDesc();
}
