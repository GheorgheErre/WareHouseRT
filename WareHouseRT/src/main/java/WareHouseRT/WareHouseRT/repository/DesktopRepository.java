package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Desktop;

@Repository
public interface DesktopRepository extends MongoRepository<Desktop, Long>{

	public List<Desktop> findByOrderByIdDesc();
}
