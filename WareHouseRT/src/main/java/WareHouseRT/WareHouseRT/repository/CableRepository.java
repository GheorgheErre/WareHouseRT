package WareHouseRT.WareHouseRT.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import WareHouseRT.WareHouseRT.beans.Cable;

@Repository
public interface CableRepository extends MongoRepository<Cable, Long> {

	public Optional<Cable> findByIdentifier(String identifier);
	
	public List<Cable> findByOrderByIdDesc();
}
