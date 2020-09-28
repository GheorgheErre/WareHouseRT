package it.rt.warehouse.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.rt.warehouse.beans.CPU;

public interface CpuRepository  extends MongoRepository<CPU, Integer>{

}
