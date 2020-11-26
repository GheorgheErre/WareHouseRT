package WareHouseRT.WareHouseRT.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import WareHouseRT.WareHouseRT.beans.GenericArticle;

@Repository
public interface GenericArticleRepository extends MongoRepository<GenericArticle, Long>{

	public List<GenericArticle> findByOrderByIdDesc();
}
