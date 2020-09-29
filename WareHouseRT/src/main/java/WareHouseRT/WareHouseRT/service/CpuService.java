package WareHouseRT.WareHouseRT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.repository.CpuRepository;

@Service
public class CpuService {

	@Autowired
	private CpuRepository repo;
	
	public void save(CPU cpu) {
		repo.save(cpu);
	} 
	
}
