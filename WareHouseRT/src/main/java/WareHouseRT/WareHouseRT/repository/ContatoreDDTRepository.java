package WareHouseRT.WareHouseRT.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.ContatoreDDT;

public interface ContatoreDDTRepository extends MongoRepository<ContatoreDDT, Long> {
	
	public Optional<ContatoreDDT> findByAnno(int anno);

}
