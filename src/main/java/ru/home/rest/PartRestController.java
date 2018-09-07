package ru.home.rest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.home.model.Part;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PartRestController {

    @RequestMapping("/all")
    public List<Part> greeting(Pageable pageable,
                               @RequestParam(value="name", required = false) String name,
                               @RequestParam(value="compulsory", required = false) Boolean compulsory) {
        System.out.println(name +  " " +compulsory);
        List<Part> parts = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Part part = new Part();
            part.setId(i + 1);
            part.setName("Комплектующая" + (i + 1));
            part.setAmount(i * 13);
            part.setCompulsory(i%2 == 1);
            parts.add(part);
        }
        return parts;
    }
}
