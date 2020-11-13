package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.HistoricMovements;
import WareHouseRT.WareHouseRT.beans.Product;

@Repository
public interface HistoricMovementsRepository extends MongoRepository<HistoricMovements, Long>{

	public List<HistoricMovements> findByProduct(Product product);
	public List<HistoricMovements> findByAction(String action);
	

}
