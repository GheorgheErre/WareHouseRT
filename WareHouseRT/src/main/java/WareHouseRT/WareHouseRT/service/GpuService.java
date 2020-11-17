package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public GPU saveOrUpdate(GPU entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public GPU save(GPU gpu) {
		gpu.setId(sequenceService.getNextSequence(GPU.SEQUENCE_NAME));
		createIdentifier.createIdentifier("GPU");
		return repo.save(gpu);
	}
	
	public GPU update(GPU gpu) {
		return repo.save(gpu);
	}
	
	public void delete(GPU entity) {
		repo.delete(entity);
	}

	public Optional<GPU> findByID(long id) {
		return repo.findById(id);
	}

	public List<GPU> findAll() {
		return repo.findAll();
	}
	
	public long count() {
	
		return repo.count();
	}

}
