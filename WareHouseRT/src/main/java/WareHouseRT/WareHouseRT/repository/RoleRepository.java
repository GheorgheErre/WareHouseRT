package WareHouseRT.WareHouseRT.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.Role;
import WareHouseRT.WareHouseRT.enums.ERole;

@Repository
public interface RoleRepository extends MongoRepository<Role, String>{

	Optional<Role> findByName(ERole name);
}
