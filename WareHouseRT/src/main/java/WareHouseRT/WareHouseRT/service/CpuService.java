package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.repository.CpuRepository;

@Service
public class CpuService {

	@Autowired
	private CpuRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(CPU cpu) {
		cpu.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		repo.save(cpu);
	} 
	
	public List<CPU> findAll() {
		return repo.findAll();
		
	} 
}
