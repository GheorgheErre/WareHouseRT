package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.GraphicTablet;

@Repository
public interface GraphicTabletRepository extends  MongoRepository<GraphicTablet, Long>{

	public List<GraphicTablet> findByOrderByIdDesc();
}
