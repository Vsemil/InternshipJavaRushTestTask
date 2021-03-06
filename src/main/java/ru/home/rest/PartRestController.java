package ru.home.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import ru.home.model.Part;
import ru.home.model.PartRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PartRestController {

    @Autowired
    PartRepository partRepository;

    @RequestMapping("/all")
    public Page<Part> greeting(Pageable pageable,
                               @RequestParam(value="name", required = false) String name,
                               @RequestParam(value="compulsory", required = false) Boolean compulsory) {
        System.out.println(pageable);
        if (name == null && compulsory == null) {
            return partRepository.findAll(pageable);
        } else if (name == null) {
            return partRepository.findAllByIsCompulsory(pageable, compulsory);
        } else if (compulsory == null){
            return partRepository.findAllByNameIgnoreCaseStartingWith(pageable, name);
        }else {
            return partRepository.findAllByNameIgnoreCaseStartingWithAndIsCompulsory(pageable, name, compulsory);
        }
    }

    @DeleteMapping("/delete")
    public void deletePart(@RequestParam(value = "id")Long id){
        partRepository.deleteById(id);
    }

    @RequestMapping("/getPart")
    public Part getPart(@RequestParam(value = "id")Part part){
        return part;
    }

    @PostMapping("/savePart")
    public void savePart(@RequestBody Part part){
        System.out.println(part);
        partRepository.save(part);
    }

    @RequestMapping("/countGatherComputer")
    public Integer countGatherComputer(){
        return partRepository.countGatherComputer();
    }
}
