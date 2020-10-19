package WareHouseRT.WareHouseRT.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.beans.User;

@Repository
public interface CableRepository extends MongoRepository<Cable, Long>{

	public Optional<Cable> findByIdentifier(String identifier);
}
