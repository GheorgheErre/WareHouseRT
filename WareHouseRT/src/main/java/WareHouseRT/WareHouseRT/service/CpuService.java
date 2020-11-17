package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;

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
	
	@Autowired
	private CreateIdentifierService createIdentifier;
	
	public CPU saveOrUpdate(CPU entity) {
		if (repo.findById(entity.getId()).isPresent()) {
			return update(entity);
		} else
			return save(entity);
	}

	public CPU save(CPU cpu) {
		cpu.setId(sequenceService.getNextSequence(CPU.SEQUENCE_NAME));
		cpu.setIdentifier(createIdentifier.createIdentifier("CPU"));
		return repo.save(cpu);
	}
	
	public CPU update(CPU newCpu) {
		return repo.save(newCpu);
	}

	public void delete(CPU entity) {
		repo.delete(entity);
	}

	public Optional<CPU> findByID(long id) {
		return repo.findById(id);
	}

	public List<CPU> findAll() {
		return repo.findAll();

	}

	public long count() {

		return repo.count();
	}

}
