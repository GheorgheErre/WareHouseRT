package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.GPU;

public interface GpuRepository extends MongoRepository<GPU, Integer>{

}
