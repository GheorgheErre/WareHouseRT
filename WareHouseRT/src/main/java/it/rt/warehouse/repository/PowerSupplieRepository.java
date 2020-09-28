package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.PowerSupplie;

public interface PowerSupplieRepository extends MongoRepository<PowerSupplie, Integer>{

}
