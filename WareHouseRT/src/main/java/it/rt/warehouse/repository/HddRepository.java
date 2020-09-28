package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.HDD;

public interface HddRepository extends MongoRepository<HDD, Integer>{

}
