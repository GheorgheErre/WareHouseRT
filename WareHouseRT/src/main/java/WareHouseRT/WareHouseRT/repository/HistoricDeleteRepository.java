package WareHouseRT.WareHouseRT.repository;


import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.beans.Product;

@Repository
public interface HistoricDeleteRepository extends MongoRepository<HistoricDelete, Long>{

	public Optional<HistoricDelete> findByProduct(Product product);
}
