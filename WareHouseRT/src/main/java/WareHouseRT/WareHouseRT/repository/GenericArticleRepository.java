package WareHouseRT.WareHouseRT.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import WareHouseRT.WareHouseRT.beans.GenericArticle;

public interface GenericArticleRepository extends MongoRepository<GenericArticle, Long>{

}
