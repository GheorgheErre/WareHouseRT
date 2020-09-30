package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.GPU;
import WareHouseRT.WareHouseRT.repository.GpuRepository;

@Service
public class GpuService {
	@Autowired
	private GpuRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(GPU gpu) {
		gpu.setId(sequenceService.getNextSequence(GPU.SEQUENCE_NAME));
		repo.save(gpu);
	}

	public List<GPU> findAll() {
		return repo.findAll();
	}
	
}
