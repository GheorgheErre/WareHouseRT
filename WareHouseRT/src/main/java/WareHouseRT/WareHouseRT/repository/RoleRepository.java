package WareHouseRT.WareHouseRT.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.Role;
import WareHouseRT.WareHouseRT.enums.ERole;

public interface RoleRepository extends MongoRepository<Role, String>{

	Optional<Role> findByName(ERole name);
}
